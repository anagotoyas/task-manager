import styled from "styled-components";
import { useGlobal } from "../../context/GlobalContext";
import { RiMoreLine } from "react-icons/ri";
import { TagPoint } from "./TagPoint";
import { TagDate } from "./TagDate";
import { TagLabel } from "./TagLabel/indext";
import { Avatar } from "../common/Avatar";

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
                <RiMoreLine size={32} />

            </StyledHeader>
            <div className="points">

                <TagPoint points={points} />
                <TagDate date={dueDate}/>
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
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;

    & p {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.75px;
        color: ${(props) => props.theme.colorWhite};
    }
`