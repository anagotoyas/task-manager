import styled from "styled-components";
import { Card } from "../components/Card";
import { useGlobal } from "../context/GlobalContext";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries";


interface Task {
  id: string;
  creator: {
    id: string;
    avatar: string | null;
    fullName: string;
  };
  assignee: {
    id: string;
    avatar: string | null;
    fullName: string;
  };
  createdAt: string;
  dueDate: string;
  name: string;
  pointEstimate: string;
  position: string;
  status: string;
  tags: string[];
}

interface DashboardData {
  tasks: Task[];
}



export const Dashboard = () => {
  const { theme } = useGlobal();
  const { loading, error, data } = useQuery<DashboardData>(GET_TASKS);




  const tasks = data?.tasks || [];
  const statuses = ["BACKLOG", "TODO", "IN_PROGRESS", "DONE", "CANCELLED"];

  const filteredTasks = (selectedStatus: string) => {
    return tasks.filter(
      (task) => task.status === selectedStatus
    );
  };

  const countTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status).length;
  };


  if (error) return <p>Error: {error.message}</p>
  if (loading) return (
    <p className="text-white">Loading...</p>)
  
  return (
    <StyledHeader theme={theme}>
      
      {statuses.map((status, index) => (
        <StyledColumn key={index} theme={theme}>
          <h2>{status} ({countTasksByStatus(status)})</h2>
          <StyledRow theme={theme} key={status}>
            {filteredTasks(status).map((task: Task, index) => {
              return(
              <Card
                key={index}
                id={task.id}
                title={task.name}
                points={task.pointEstimate}
                tags={task.tags}
                assignee={task.assignee}
                status={task.status}
                dueDate={task.dueDate}
              />
            )})}
          </StyledRow>
     
        </StyledColumn>
      ))}
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: full;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
`;

const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 356px;
  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.colorWhite};
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 356px;
  overflow-y: auto;
`;
