import styled from 'styled-components';
import { useGlobal } from '../../../context/GlobalContext';

export const TaskEmpty = () => {
    const {theme} = useGlobal()
  return (
    <StyledHeader theme={theme}>
        <StyledColumn theme={theme} className="col-span-10">
            <p>There are no tasks in this column</p>
        </StyledColumn>
    </StyledHeader>
  )
}
const StyledColumn = styled.div`
  padding: 10px;
  height: 56px;
  display: flex;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.colorGrayLight};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: inherit;
  overflow-x: auto;
  gap: 0.5rem;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1; 
  }

  &:last-child {
    border-right: none;
  }
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 10%);
  background-color: ${(props) => props.theme.colorBgSidebar};
  color: ${(props) => props.theme.colorWhite};
  border-radius:  0 ;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.theme.colorGrayLight};

  &:last-child {
  border-radius: 0 0  8px 8px;

  }
  &:first-child {
    border: 2px solid ${(props) => props.theme.colorGrayLight};
    border-top: none;

  }
`;