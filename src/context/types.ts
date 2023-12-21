import { CreateTaskInput, DeleteTaskInput, Task, UpdateTaskInput } from "../utils/types";
import { Theme } from "./themes";

export interface GlobalContextProps {
  theme: Theme;
  isLoading: boolean;
  collapsed: boolean;
  collapseMenu: () => void;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: Task[]; 
  createTask: (input: CreateTaskInput) => Promise<void>;
  deleteTask: (input: DeleteTaskInput) => Promise<void>;
  updateTask: (input: UpdateTaskInput) => Promise<void>;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; 

}
