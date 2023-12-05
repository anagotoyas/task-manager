import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { EstimateButton } from "./EstimateButton";
import { AsigneeButton } from "./AsigneeButton";
import { TagButton } from "./TagButton";
import 'animate.css';
import { DueDateButton } from "./DueDateButton";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TaskModalProps } from "../../utils/types";




export const TaskModal = (props: TaskModalProps) => {

    const { isOpen, onClose, children, initialData } = props;
    
    const { setIsLoading, theme, createTask, updateTask  } = useGlobal()
    const [pointValue, setPointValue] = useState(initialData?.pointValue ?? undefined);
    const [user, setUser] = useState(initialData?.user ?? null);
    const [tagsSelected, setTagsSelected] = useState(initialData?.tagsSelected ?? []);
    const [dateSelected, setDateSelected] = useState(initialData?.dateSelected ?? undefined);
    const [taskTitle, setTaskTitle] = useState(initialData?.title ?? "");
    const [status, setStatus] = useState(initialData?.status ?? "BACKLOG");



 


    const stopPropagation = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const handleCreateTask = async () => {
        try {
            setIsLoading(true)  

            if(initialData){
                await updateTask({
                            id: initialData?.id,
                            name: initialData?.title !== taskTitle ? taskTitle : undefined,
                            pointEstimate: initialData?.pointValue !== pointValue ? pointValue : undefined,
                            assigneeId: initialData?.user?.id !== user?.id ? user?.id : undefined,
                            status: initialData?.status !== status ? status : undefined,
                            tags: innerWidth !== initialData?.tagsSelected.length ? tagsSelected : undefined,
                            dueDate: initialData?.dateSelected !== dateSelected ? dateSelected : undefined,
                      
                   
                });
                toast.success('Task updated successfully');
            }
            else {
                await createTask({
                            name: taskTitle,
                            pointEstimate: pointValue !== null ? pointValue : undefined,
                            assigneeId: user?.id !== null ? user?.id : undefined,
                            status: status,
                            tags: tagsSelected,
                            dueDate: dateSelected,
                       
                });
                toast.success('Task created successfully');
            }
         

            closeModal();

           
        } catch (error) {
            console.error('Error creating task', error);
            {
                initialData ? toast.error('Error updating task. Please try again.') : toast.error('Error creating task. Please try again.')
            }

        } finally {
            setIsLoading(false)
        }
    };

    const closeModal = () => {
        setTaskTitle("")
        setPointValue(undefined)
        setUser(null)
        setTagsSelected([])
        setDateSelected(undefined)
        onClose()
    }

    useEffect(() => {
        if (isOpen) {
            setTaskTitle(initialData?.title ?? "");
            setPointValue(initialData?.pointValue ?? undefined);
            setUser(initialData?.user ?? null);
            setTagsSelected(initialData?.tagsSelected ?? []);
            setDateSelected(initialData?.dateSelected ?? undefined);
            setStatus(initialData?.status ?? "BACKLOG");

        }
    }, [isOpen]);




    return (
        <ModalOverlay open={isOpen} >
            <OverlayBackground />
            <ModalContainer theme={theme} onClick={stopPropagation}
            >
                <StyledInput theme={theme} value={taskTitle} type="text" placeholder="Task Title" onChange={(e) => setTaskTitle(e.target.value)} />
            
               
                <StyledActions >
                  
                    <EstimateButton pointValue={pointValue} setPointValue={setPointValue} />
                    <AsigneeButton user={user} setUser={setUser} />
                    <TagButton tagsSelected={tagsSelected} setTagsSelected={setTagsSelected} />
                    <DueDateButton dateSelected={dateSelected} setDateSelected={setDateSelected} />
                </StyledActions>


                <StyledContainerButtons>
                    <StyledCancelButton theme={theme} onClick={closeModal}>Cancel</StyledCancelButton>
                    <StyledCreateButton theme={theme} onClick={handleCreateTask}>
                        {
                            initialData ? 'Update' : 'Create'
                        }
                    </StyledCreateButton>
                </StyledContainerButtons>
                {children}

            </ModalContainer>
           
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  position: fixed;
  inset: 0;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const OverlayBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colorGrayLight};
  width: auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: bounceInDown 0.5s;
  
`;

const StyledInput = styled.input`
	width: 100%;
	border: none;
	background-color: transparent;
    color: ${(props) => props.theme.colorWhite};

	font-size: ${(props) => props.theme.fontSizeLg};

    &:focus {
		outline: none;
	}

    &::placeholder {
        color: ${(props) => props.theme.colorGray};
    }
    
`;

const StyledContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;

    & > button {
        border-radius: 0.5rem;
        padding: 0.5rem;
        font-size: ${(props) => props.theme.fontSizeSm};

    }
`;

const StyledActions = styled.div`
    display: flex;
    gap: 1rem;
   
`;

const StyledCreateButton = styled.button`
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorRedPrimary};

    &:hover {
        background-color: ${(props) => props.theme.colorRedLightPrimary};
    }

`

const StyledCancelButton = styled.button`
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorGraySecondary};

    &:hover {
        background-color: ${(props) => props.theme.colorGray};
    }   

`
