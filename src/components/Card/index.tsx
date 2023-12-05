import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { RiDeleteBin6Line, RiMoreLine, RiPencilLine } from "react-icons/ri";
import { TagPoint } from "./TagPoint";
import { TagDate } from "./TagDate";
import { TagLabel } from "./TagLabel/indext";
import { Avatar } from "../common/Avatar";
import { Menu } from '@headlessui/react'
import { DeleteModal } from "../DeleteModal";
import { useState } from "react";
import { TaskModal } from "../TaskModal";

interface CardProps {
    id: string;
    title: string;
    points: string;
    assignee: User;
    tags: string[];
    dueDate: string;
    status: string;


}



interface User {
    fullName: string;
    avatar: string | null;
    id: string;

}

export const Card = (props: CardProps) => {
    const { theme } = useGlobal()
    const { title, points, tags, dueDate, id, assignee, status } = props;
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);



    let initialData = {
        id,
        title,
        pointValue: points,
        user: assignee,
        tagsSelected: tags,
        dateSelected: dueDate,
        status: status
    };





    const openDeleteModal = () => {
        setIsOpenDeleteModal(true);

    };

    const openModalTask = () => {
        setIsOpenTaskModal(true);

    };

    const closeModalTask = () => {
        setIsOpenTaskModal(false);
    };


    const closeDeleteModal = () => {
        setIsOpenDeleteModal(false);
    };

    const handleUpdateTask = () => {
        initialData = {
            id,
            title,
            pointValue: points,
            user: assignee,
            tagsSelected: tags,
            dateSelected: dueDate,
            status: status

        };
        openModalTask()

    }







    return (
        <StyleCard theme={theme} >
            <StyledHeader theme={theme} className="relative">
                <p>
                    {title}
                </p>
                <Menu as="div">
                    <Menu.Button >
                        <StyledIcon theme={theme} size={32} />
                    </Menu.Button>
                    <StyledContMenuItems theme={theme}>
                        <StyledMenuItems theme={theme}>
                            <Menu.Item >
                                <StyledMenuButton theme={theme} onClick={handleUpdateTask}>
                                    <RiPencilLine size={18} />Edit
                                </StyledMenuButton>
                            </Menu.Item>

                            <Menu.Item>
                                <StyledMenuButton theme={theme} onClick={openDeleteModal}>
                                    <RiDeleteBin6Line size={18} />Delete
                                </StyledMenuButton>
                            </Menu.Item>
                        </StyledMenuItems>
                    </StyledContMenuItems>
                </Menu>

            </StyledHeader>
            <div className="points">

                <TagPoint points={points} />
                <TagDate date={dueDate} />
            </div>

            <div className="tags">
                {tags.map((tag, index) => (
                    <TagLabel key={index} label={tag} />
                ))}
            </div>
            <Avatar src={assignee.avatar} size={32} />

            <DeleteModal
                isOpen={isOpenDeleteModal}
                onClose={closeDeleteModal}
                id={id}
                title={title}
            >

            </DeleteModal>

            <TaskModal
                isOpen={isOpenTaskModal}
                onClose={closeModalTask}
                initialData={initialData}
            >

            </TaskModal>



        </StyleCard>
    )
}

const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colorBgSidebar};
    width: ${props => props.theme.widthCard};
    border-radius: .5rem;
    padding: 1rem;
    gap: 1rem;
    margin: 1rem 0;

    & .points {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .tags {
        display: flex;
        gap: .5rem;
        flex-wrap: wrap;
    }


    `

const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;

    & p {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.75px;
        color: ${(props) => props.theme.colorWhite};
    }
`

const StyledIcon = styled(RiMoreLine)`
    display: flex;
    color: ${(props) => props.theme.colorGray};
    width: 32px;
    height: 32px;

    &:hover {
        color: ${(props) => props.theme.colorWhite};
    }

 
`
const StyledContMenuItems = styled(Menu.Items)`
    top: 10;
    position: absolute; 
    right: 0;


`
const StyledMenuItems = styled.div`
    position: relative;
    z-index: 50;
    right: 0;
    background-color: ${(props) => props.theme.colorGrayLight};
    border-radius: .5rem;
    padding: .5rem;
    gap: .5rem;
    border: 1px solid ${(props) => props.theme.colorGray};
    width: 138px;

    
`

const StyledMenuButton = styled.button`
    display: flex;
    width: 100%;    
    align-items: center;
    justify-content: start;
    gap: .5rem;
    padding:.5rem 1rem;
    cursor: pointer;
    color: ${(props) => props.theme.colorWhite};
    border-radius: .25rem;   


    &:hover {
        background-color: ${(props) => props.theme.colorGray};
    }


`

