import styled from "styled-components";
import { useGlobal } from "../../../context/GlobalContext";

interface TagLabelProps {
    label: string;
   
}
interface StyledTagLabelProps {
    background: string;
    color: string;
}


export const TagLabel = (props: TagLabelProps) => {
    const { label } = props;
    const { theme } = useGlobal();
    let color;
    let background;

    switch (label) {
        case "ANDROID":
            color = "colorYellowPrimary";
            background = "colorYellowSecondary";
            break;
        case "RAILS":
            color = "colorPinkPrimary";
            background = "colorPinkSecondary";
            break;
        case "NODE_JS":
            color = "colorGreenPrimary";
            background = "colorGreenSecondary";
            break;
        case "REACT":
            color = "colorBluePrimary";
            background = "colorBlueSecondary";
            break;
        case "IOS":
            color = "colorGreenPrimary";
            background = "colorGreenSecondary"; 
            break;

        default:
            color = "colorPurplePrimary";
            background = "colorPurpleSecondary";
            break;

    }



    return (
        <StyledTagLabel
            theme={theme}
            background={background}
            color={color}
        >
            {props.label}
        </StyledTagLabel>
    );
}

const StyledTagLabel = styled.div<StyledTagLabelProps>`
  background-color: ${(props) =>
        props.theme[props.background]};
  color: ${(props) => props.theme[props.color]};
  padding: 0.25rem 1rem;
  width: fit-content;
  border-radius: 0.25rem;
  font-size: 15px;
`;
