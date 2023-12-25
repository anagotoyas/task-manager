import { useGlobal } from '../../../context/GlobalContext'
import styled from 'styled-components'
import { RiArrowDownSFill } from 'react-icons/ri'

interface Props {
    name: string,
    number: number,
    open: boolean;
}

export const TaskHeader = (props: Props) => {
    const { name, number, open } = props
    const { theme } = useGlobal()
    return (
        <StyledHeader theme={theme} open={open}>
            <div className="flex">
                <RiArrowDownSFill size={32} />
                <h2>
                    {name} <span>({number})</span>

                </h2>
            </div>



        </StyledHeader>
    )
}

const StyledHeader = styled.div<{ open: boolean }>`
    display: flex;
    width: full;
    background-color: ${(props) => props.theme.colorBgSidebar};
    border: 2px solid ${(props) => props.theme.colorGrayLight};
    border-radius: ${(props) => (props.open ? '8px 8px 0 0' : '8px')};
    padding: .25rem 1rem;
    height: 56px;

  div{
    display: flex;
    gap:.5rem;
    align-items: center;


    color: ${(props) => props.theme.colorGray};
  }
  svg {
      transition: transform 0.3s ease; 

      transform: ${(props) => (props.open ? 'rotate(180deg)' : 'rotate(0deg)')};
    }

  h2{
    font-size: ${(props) => props.theme.fontSizeMd};
    color: ${(props) => props.theme.colorWhite};
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    word-wrap: break-word;
 
    span{

        color: ${(props) => props.theme.colorGray};
    }
  }

    `;
