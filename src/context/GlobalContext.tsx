import  { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { themes, Theme } from "./themes";
import { GlobalContextProps } from "./types";
import { GET_TASKS } from "../graphql/queries";
import { CREATE_TASK_MUTATION, DELETE_TASK_MUTATION, UPDATE_TASK_MUTATION } from "../graphql/mutations";
import { apolloClient } from "../config/ApolloConfig";
import { CreateTaskInput, DashboardData, DeleteTaskInput, Task, UpdateTaskInput } from "../utils/types";

const initialContextValue: GlobalContextProps = {
  theme: themes[0], 
  isLoading: false,
  collapsed: false,
  collapseMenu: () => {},
  setIsLoading: () => {},
  tasks: [],
  createTask: async () => { return Promise.resolve(); }, 
  deleteTask: async () => { return Promise.resolve(); }, 
  updateTask: async () => { return Promise.resolve(); },
};

 
const GlobalContext = createContext<GlobalContextProps>(initialContextValue);

interface GlobalProviderProps {
  children: ReactNode;
}



export function GlobalProvider({ children }: GlobalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const theme: Theme = themes[selectedTheme];

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const updateTasks = async () => {
    try {
      setIsLoading(true);
      const { data } = await apolloClient.query<DashboardData>({ query: GET_TASKS });
      setTasks(data?.tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async (input: CreateTaskInput) => {
    try {
      setIsLoading(true);
      const {data } = await apolloClient.mutate({
        mutation: CREATE_TASK_MUTATION,
        variables: { input },
        refetchQueries: [{ query: GET_TASKS }],
      });
      setTasks(prevTasks => [...prevTasks, data.createTask]); 
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTask = async (input: DeleteTaskInput) => {
    try {
      setIsLoading(true);
      await apolloClient.mutate({
        mutation: DELETE_TASK_MUTATION,
        variables: { input },
        refetchQueries: [{ query: GET_TASKS }],
      });
      setTasks(prevTasks => prevTasks.filter(task => task.id !== input.id));
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (input: UpdateTaskInput) => {
    try {
      setIsLoading(true);
      await apolloClient.mutate({
        mutation: UPDATE_TASK_MUTATION,
        variables: { input },
        refetchQueries: [{ query: GET_TASKS }],
      });
      await updateTasks(); 
    } catch (error) {
      console.error("Error updating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateTasks();
  }, []); 

  const contextValue: GlobalContextProps = {
    theme,
    isLoading,
    collapsed,
    collapseMenu,
    setIsLoading,
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}




export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
