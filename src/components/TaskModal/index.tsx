import React, { useState } from "react";
import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { EstimateButton } from "./EstimateButton";
import { AsigneeButton } from "./AsigneeButton";
import { TagButton } from "./TagButton";
import 'animate.css';
import { DueDateButton } from "./DueDateButton";


interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


interface User {
    id: string;
    avatar: string | null;
    fullName: string;
}


export const TaskModal = (props: TaskModalProps) => {
    const { isOpen, onClose, children } = props;
    const [pointValue, setPointValue] = useState(null as number | null)
    const [user, setUser] = useState(null as User | null)
    const [tagsSelected, setTagsSelected] = useState([] as (string | undefined)[])
    const [dateSelected, setDateSelected] = useState(null as string | null)


    
    console.log(tagsSelected)

    const { theme } = useGlobal()

    const stopPropagation = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const closeModal = () =>{
        setPointValue(null)
        setUser(null)
        setTagsSelected([])
        setDateSelected(null)
        onClose()
    }




return (
    <ModalOverlay open={isOpen} >
        <OverlayBackground />
        <ModalContainer theme={theme} onClick={stopPropagation}
        >
            <StyledInput theme={theme} type="text" placeholder="Task Title" />
            <StyledActions >
                <EstimateButton pointValue={pointValue} setPointValue={setPointValue} />
                <AsigneeButton user={user} setUser={setUser} />
                <TagButton tagsSelected={tagsSelected} setTagsSelected={setTagsSelected} />
                <DueDateButton dateSelected={dateSelected}setDateSelected={setDateSelected} />
            </StyledActions>



            <StyledContainerButtons>
                <StyledCancelButton theme={theme} onClick={closeModal}>Cancel</StyledCancelButton>
                <StyledCreateButton theme={theme}>Create</StyledCreateButton>
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
