import styled from 'styled-components';
import { Card } from '../components/Card';
import { useGlobal } from '../context/GlobalContext';
import { Task } from '../utils/types';
import { EmptyCard } from '../components/EmptyCard';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

export const Dashboard = () => {
  const { theme, tasks, setTasks } = useGlobal();

  const statuses = ['BACKLOG', 'TODO', 'IN_PROGRESS', 'DONE', 'CANCELLED'];

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { destination } = result;

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      const movedTaskIndex = updatedTasks.findIndex((task) => task.id === result.draggableId);

      if (movedTaskIndex === -1) {
        return prevTasks;
      }

      const movedTask = updatedTasks[movedTaskIndex];

      updatedTasks.splice(movedTaskIndex, 1);

      const updatedTask = { ...movedTask, status: destination.droppableId };

      updatedTasks.splice(destination.index, 0, updatedTask);

      return updatedTasks;
    });
  };

  const countTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status).length;
  };

  return (
    <StyledHeader theme={theme}>
      <DragDropContext onDragEnd={onDragEnd}>
        {statuses.map((status, index) => (
          <StyledColumn key={index} theme={theme}>
            <h2>
              {status} ({countTasksByStatus(status)})
            </h2>
            <Droppable droppableId={status} key={status}>
              {(provided, snapshot) => (
                <StyledRow
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  theme={theme}
                  dragging_over={snapshot.isDraggingOver?snapshot.isDraggingOver.toString():undefined}

                >
                  {tasks
                    .filter((task) => task.status === status)
                    .map((task: Task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              marginBottom: '8px',
                              boxShadow: snapshot.isDragging
                                ? '0 4px 8px rgba(0, 0, 0, 0.1)'
                                : 'none',
                              ...provided.draggableProps.style,
                            }}
                          >
                            <Card
                              id={task.id}
                              title={task.name}
                              points={task.pointEstimate}
                              tags={task.tags}
                              assignee={task.assignee}
                              status={task.status}
                              dueDate={task.dueDate}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  {tasks.filter((task) => task.status === status).length === 0 && <EmptyCard />}
                </StyledRow>
              )}
            </Droppable>
          </StyledColumn>
        ))}
      </DragDropContext>
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

const StyledRow = styled.div<{ dragging_over?: string }>`
  display: flex;
  flex-direction: column;
  height: full;
  width: 356px;
  overflow-y: auto;
  background-color: ${(props) => ((props.dragging_over) ? props.theme.colorGrayLight : props.theme.colorBg)};
  border-radius: 4px;
  transition: background-color 0.3s;
`;

