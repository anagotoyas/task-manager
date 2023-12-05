import React from 'react'
import { useGlobal } from '../../../context/GlobalContext'
import styled from 'styled-components'
import { RiArrowDownSFill } from 'react-icons/ri'

interface Props {
    name: string,
    number: number
}

export const TaskHeader = (props:Props) => {
    const { name, number } = props
    const { theme } = useGlobal()
    return (
        <StyledHeader theme={theme}>
            <div className="flex">
            <RiArrowDownSFill size={32}/>
                <h2>
                {name} <span>({number})</span>

                </h2>
            </div>
           


        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    width: full;
    background-color: ${(props) => props.theme.colorBgSidebar};
  border: 2px solid ${(props) => props.theme.colorGrayLight};
  padding: .25rem 1rem;

  div{
    display: flex;
    gap:.5rem;

    color: ${(props) => props.theme.colorGray};
  }

  h2{
    font-size: ${(props) => props.theme.fontSizeMd};
    color: ${(props) => props.theme.colorWhite};
    span{

        color: ${(props) => props.theme.colorGray};
    }
  }

    `;
