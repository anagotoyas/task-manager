import styled from "styled-components";
import { Card } from "../components/Card";
import { useGlobal } from "../context/GlobalContext";
import {  Task } from "../utils/types";
import { EmptyCard } from "../components/EmptyCard";




export const Dashboard = () => {
  const { theme, tasks } = useGlobal();

  
  const statuses = ["BACKLOG", "TODO", "IN_PROGRESS", "DONE", "CANCELLED"];

  const filteredTasks = (selectedStatus: string) => {
    return tasks.filter(
      (task) => task.status === selectedStatus
    );
  };

  const countTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status).length;
  };


 
  
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
            {filteredTasks(status).length === 0 && <EmptyCard />}
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
