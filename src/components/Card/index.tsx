import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { RiDeleteBin6Fill, RiDeleteBin6Line, RiEyeFill, RiFolderAddLine, RiMore2Fill, RiMoreLine, RiPencilLine, RiUserAddFill } from "react-icons/ri";
import { TagPoint } from "./TagPoint";
import { TagDate } from "./TagDate";
import { TagLabel } from "./TagLabel/indext";
import { Avatar } from "../common/Avatar";
import { Menu, Transition } from '@headlessui/react'


interface CardProps {
    title: string;
    points: string;
    tags: string[];
    avatar: User["avatar"] | null;
    dueDate: string;
}



interface User {
    name: string;
    avatar: string;
}

export const Card = (props: CardProps) => {
    const { theme } = useGlobal()
    const { title, points, tags, avatar, dueDate } = props
    return (
        <StyleCard theme={theme}>
            <StyledHeader theme={theme}>
                <p>
                    {title}
                </p>
                <Menu as="div" className="">
                    <Menu.Button>
                        <StyledIcon theme={theme} size={32} />
                    </Menu.Button>
                    <Menu.Items>
                        <StyledMenuItems theme={theme}>
                            <Menu.Item >
                                <StyledMenuButton theme={theme}>
                                    <RiPencilLine size={24} />Edit
                                </StyledMenuButton>
                            </Menu.Item>

                            <Menu.Item>
                                <StyledMenuButton theme={theme}>
                                    <RiDeleteBin6Line size={24} />Delete
                                </StyledMenuButton>
                            </Menu.Item>
                        </StyledMenuItems>
                    </Menu.Items>
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
            <Avatar src={avatar} />


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

const StyledIcon= styled(RiMoreLine)`
    display: flex;
    color: ${(props) => props.theme.colorGray};
    width: 32px;
    height: 32px;

    &:hover {
        color: ${(props) => props.theme.colorWhite};
    }

 
`

const StyledMenuItems = styled.div`
    position: absolute;
    right: 0;
    background-color: ${(props) => props.theme.colorGrayLight};
    border-radius: .5rem;
    padding: .5rem;
    gap: .5rem;
    border: 1px solid ${(props) => props.theme.colorGray};;

    
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