import { IconType } from 'react-icons';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { useGlobal } from '../../../context/GlobalContext';

interface OptionsProps {
    to: string;
    active: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: IconType | any;
}

export const Option = (props: OptionsProps) => {
    const { theme } = useGlobal();
    const { icon: Icon, active } = props;


    return (
        <>
            <StyledOption theme={theme} to={props.to} active={active===true ? true.toString() : ""}>
                <Icon size={24} style={{ minWidth: "24px" }} />
            </StyledOption>
        </>
    )
}

const StyledOption = styled(Link) <{ active: string }>`
    color: ${(props) => props.theme.colorGray};
    padding: 4px;
    
    ${({ active, theme }) => active && `
        border: 2px solid ${theme.colorRedPrimary};
        border-radius: 8px;
        color: ${theme.colorRedPrimary};

       
    `}

    &:hover {
        color: ${(props) => props.theme.colorRedPrimary};
    }
`
