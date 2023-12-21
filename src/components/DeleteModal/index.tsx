import React from 'react'
import styled from 'styled-components';
import { useGlobal } from '../../context/GlobalContext';
import { toast } from 'react-toastify';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    title: string;
}


export const DeleteModal = ({ isOpen, onClose, id, title }: DeleteModalProps) => {

    const { theme, deleteTask } = useGlobal()



    const stopPropagation = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onClose();
    };

    const handleDelete = async () => {
        try {
            await deleteTask({
                id: id,
            });
            toast.success('Task deleted successfully');
            onClose();
        } catch (error) {
            toast.error('Something went wrong');
        } 
    };



    return (
        <ModalOverlay open={isOpen} >
            <OverlayBackground onClick={stopPropagation} />
            <ModalContainer theme={theme}
            >
                <h2>Delete task</h2>
                <h3>Are you sure you want to delete task <span>"{title}"</span> ?</h3>

                

                <StyledContainerButtons>
                    <StyledCancelButton theme={theme} onClick={stopPropagation}>Cancel</StyledCancelButton>
                    <StyledCreateButton theme={theme} onClick={handleDelete}>Delete</StyledCreateButton>
                </StyledContainerButtons>

                

            </ModalContainer>
        </ModalOverlay>
    );
}
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
    width: 25rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: .5rem;
    animation: bounceInDown 0.5s;

    

    & h2,
    h3
     {
        color: ${(props) => props.theme.colorWhite}; 
    }

    & h2 {
        font-size: ${(props) => props.theme.fontSizeLg};
    }

    h3 {
        line-height: 2rem;

        span {
            color: ${(props) => props.theme.colorRedPrimary};
            font-weight: 600;
        }
    }
  
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
