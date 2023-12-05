import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { EstimateButton } from "./EstimateButton";
import { AsigneeButton } from "./AsigneeButton";
import { TagButton } from "./TagButton";
import 'animate.css';
import { DueDateButton } from "./DueDateButton";
import { useMutation } from '@apollo/client';
import { CREATE_TASK_MUTATION, UPDATE_TASK_MUTATION } from '../../graphql/mutations';
import { GET_TASKS } from '../../graphql/queries';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    initialData?: {
        id: string;
        title: string;
        pointValue: string | null;
        user: User,
        tagsSelected: string[];
        dateSelected: string | null;
        status: string | null;
    };
}


interface User {
    id: string;
    avatar: string | null;
    fullName: string;
}


export const TaskModal = (props: TaskModalProps) => {

    const { isOpen, onClose, children, initialData } = props;
    
    const { setIsLoading, theme } = useGlobal()
    const [pointValue, setPointValue] = useState(initialData?.pointValue ?? null);
    const [user, setUser] = useState(initialData?.user ?? null);
    const [tagsSelected, setTagsSelected] = useState(initialData?.tagsSelected ?? []);
    const [dateSelected, setDateSelected] = useState(initialData?.dateSelected ?? null);
    const [taskTitle, setTaskTitle] = useState(initialData?.title ?? "");
    const [status, setStatus] = useState(initialData?.status ?? "BACKLOG");



    const [createTaskMutation] = useMutation(CREATE_TASK_MUTATION, {
        refetchQueries: [{ query: GET_TASKS }],
        awaitRefetchQueries: true,
        onCompleted: () => {
            closeModal();
        },
    });

    const [updateTaskMutation] = useMutation(UPDATE_TASK_MUTATION, {
        refetchQueries: [{ query: GET_TASKS }],
        awaitRefetchQueries: true,
        onCompleted: () => {
            closeModal();
        },
    });


    const stopPropagation = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    const handleCreateTask = async () => {
        try {
            setIsLoading(true)  

            if(initialData){
                await updateTaskMutation({
                    variables: {
                        input: {
                            id: initialData?.id,
                            name: taskTitle,
                            pointEstimate: pointValue !== null ? pointValue : undefined,
                            assigneeId: user?.id !== null ? user?.id : undefined,
                            status: status,
                            tags: tagsSelected,
                            dueDate: dateSelected,
                        },
                    },
                });
                toast.success('Task updated successfully');
            }
            else {
                await createTaskMutation({
                    variables: {
                        input: {
                            name: taskTitle,
                            pointEstimate: pointValue !== null ? pointValue : undefined,
                            assigneeId: user?.id !== null ? user?.id : undefined,
                            status: status,
                            tags: tagsSelected,
                            dueDate: dateSelected,
                        },
                    },
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
        setPointValue(null)
        setUser(null)
        setTagsSelected([])
        setDateSelected(null)
        onClose()
    }

    useEffect(() => {
        if (isOpen) {
            setTaskTitle(initialData?.title ?? "");
            setPointValue(initialData?.pointValue ?? null);
            setUser(initialData?.user ?? null);
            setTagsSelected(initialData?.tagsSelected ?? []);
            setDateSelected(initialData?.dateSelected ?? null);
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
