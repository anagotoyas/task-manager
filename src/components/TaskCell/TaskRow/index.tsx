import React from 'react';
import { useGlobal } from '../../../context/GlobalContext';
import styled from 'styled-components';
import { TagLabel } from '../../Card/TagLabel/indext';

import { TagDate } from '../../Card/TagDate';
import { Avatar } from '../../common/Avatar';

interface TaskRowProps {
  tagSelected: string[];
  title: string;
  pointValue: string;
  assignee: User;
  dueDate: string;
}

interface User {
  fullName: string;
  avatar: string | null;
  id: string;
}

const wordToNumber = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  FOUR: 4,
  EIGHT: 8,
} as const;

export const TaskRow: React.FC<TaskRowProps> = ({
  tagSelected,
  title,
  pointValue,
  assignee,
  dueDate,
}) => {
  const { theme } = useGlobal();

  return (
    <StyledHeader theme={theme}>
      <StyledColumn theme={theme} className="col-span-2">
        {title}
      </StyledColumn>
      <StyledColumn theme={theme} className="col-span-2">
        {tagSelected.map((tag) => (
          <TagLabel key={tag} label={tag} />
        ))}
      </StyledColumn>
      <StyledColumn theme={theme} className="col-span-1">
        {wordToNumber[pointValue as keyof typeof wordToNumber]} Points
      </StyledColumn>
      <StyledColumn theme={theme} className="col-span-2">
        <Avatar size={22} src={assignee.avatar} />
        <p className="ellipsis"> {assignee.fullName}</p>
       
      </StyledColumn>
      <StyledColumn theme={theme} className="col-span-3">
        <TagDate date={dueDate} />
      </StyledColumn>
    </StyledHeader>
  );
};

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
