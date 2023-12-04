import styled from 'styled-components';
import { useGlobal } from '../../../context/GlobalContext';
import { IconType } from "react-icons";
import { Avatar } from '../../common/Avatar';


interface ButtonTaskProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?:IconType | any;
    img?:string | null ;
    text:string;
    onClick?: () => void;
    visibleImg?: boolean;
    visibleIcon?: boolean;


}

export const ButtonTask = (props: ButtonTaskProps) => {
    const {icon:IconType, text, onClick, img, visibleImg, visibleIcon} = props
    const {theme} = useGlobal()
  return (
    <StyledButton theme={theme}  onClick={onClick} >
        {visibleIcon && <IconType size={24} className="text-white" />}
        {
            visibleImg && <Avatar src={img} size={24} />
        }
        <TextContainer>{text}</TextContainer>
</StyledButton>
  )
}
const StyledButton = styled.button`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colorWhite};
    gap: 0.5rem;
    background-color: ${(props) => props.theme.colorGraySecondary};
    padding: 0.25rem 1rem;
    border-radius: 0.25rem;
    position: relative;

    &:hover {
        background-color: ${(props) => props.theme.colorGray};
    }
    
`;
const TextContainer = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 150px;
`;

