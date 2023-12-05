import styled from 'styled-components'
import { useGlobal } from '../../context/GlobalContext'

export const EmptyCard = () => {
    const {theme} = useGlobal()
  return (
    <StyleCard theme={theme}>
        <h3>No cards</h3>
    </StyleCard>
  )
}



const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    height:213px;
    justify-content: center;
    align-items: center;
    background-color:transparent;
    width: ${props => props.theme.widthCard};
    border-radius: .5rem;
    border: 3px dashed ${props => props.theme.colorGraySecondary};
    padding: 1rem;
    gap: 1rem;
    margin: 1rem 0;

    h3{
        color: ${props => props.theme.colorGray};
        font-size: ${props => props.theme.fontSizeMd};
    }


    `

