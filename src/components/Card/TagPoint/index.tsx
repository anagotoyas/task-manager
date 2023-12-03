import { useGlobal } from '../../../context/GlobalContext';
import styled from 'styled-components';

interface TagPointProps {
    points: string;
}

export const TagPoint = (props: TagPointProps) => {
    const { points } = props
    const { theme } = useGlobal()
    let pointsNumber = 0

    switch (points) {
        case "ZERO":
            pointsNumber = 0
            break;
        case "ONE":
            pointsNumber = 1
            break;
        case "TWO":
            pointsNumber = 2
            break;
        case "FOUR":
            pointsNumber = 4
            break;
        case "EIGHT":
            pointsNumber = 8
            break;
        default:
            pointsNumber = 0
            break;

    }

    return (
        <StyledTagPoint theme={theme} >
            {pointsNumber} Points
        </StyledTagPoint>
    )

}

const StyledTagPoint = styled.span`
    color: ${(props) => props.theme.colorWhite};
    font-size: 15px;
`
