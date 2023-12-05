import { useGlobal } from '../context/GlobalContext';
import styled from 'styled-components';
import { Disclosure } from '@headlessui/react';
import { TaskRow } from '../components/TaskCell/TaskRow';
import { TaskHeader } from '../components/TaskCell/TaskHeader';




export const MyTask = () => {
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
    <StyledContent>
      {/* Encabezado de la tabla */}
      <StyledHeader theme={theme}>
        <StyledColumn theme={theme} className="col-span-2"># Task Name</StyledColumn>
        <StyledColumn theme={theme} className="col-span-2">Task Tags</StyledColumn>
        <StyledColumn theme={theme} className="col-span-1">Estimate</StyledColumn>
        <StyledColumn theme={theme} className="col-span-2">Task Assign Name</StyledColumn>
        <StyledColumn theme={theme} className="col-span-3">Due Date</StyledColumn>
      </StyledHeader>

      {statuses.map((status, index) => (
        <div className='w-full' key={status}>
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className={"w-full"} >
                  <TaskHeader name={status} number={countTasksByStatus(status)} open={open} />
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
              </>
            )}


          </Disclosure>
        </div>

      ))}

    </StyledContent>

  );
};

const StyledContent = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
overflow-y: auto;
`;

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
