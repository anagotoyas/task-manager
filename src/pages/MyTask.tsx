import React from 'react';
import { useGlobal } from '../context/GlobalContext';
import styled from 'styled-components';
import { Disclosure } from '@headlessui/react';
import { TaskRow } from '../components/TaskCell/TaskRow';
import { TaskHeader } from '../components/TaskCell/TaskHeader';
import { GET_TASKS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

interface DashboardData {
  tasks: Task[];
}
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

export const MyTask = () => {
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




  return (
    <div className="w-full overflow-auto">
      {/* Encabezado de la tabla */}
      <StyledHeader theme={theme}>
        <StyledColumn theme={theme} className="col-span-2"># Task Name</StyledColumn>
        <StyledColumn theme={theme} className="col-span-2">Task Tags</StyledColumn>
        <StyledColumn theme={theme} className="col-span-1">Estimate</StyledColumn>
        <StyledColumn theme={theme} className="col-span-3">Task Assign Name</StyledColumn>
        <StyledColumn theme={theme} className="col-span-2">Due Date</StyledColumn>
      </StyledHeader>

    
      {statuses.map((status, index) => (
        <Disclosure key={index}>
          <Disclosure.Button className="py-2 w-full">
            <TaskHeader name={status} number={countTasksByStatus(status)} />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500" key={index}>
            {filteredTasks(status).map((task) => (
              <TaskRow
                key={task.id}
                tagSelected={task.tags}
                pointValue={task.pointEstimate}
                assignee={task.assignee}
                dueDate={task.dueDate}
                title={task.name}
              />
            ))}
          </Disclosure.Panel>
        </Disclosure>
      ))}

    

    </div>

  );
};

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: ${(props) => props.theme.colorBgSidebar};
  color: ${(props) => props.theme.colorWhite};
  border-radius: 8px ;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colorGrayLight};
`;

const StyledColumn = styled.div`
  padding: 10px;
  height: 56px;
  display: flex;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colorGrayLight};
  &:last-child {
    border-right: none;
  }
`;
