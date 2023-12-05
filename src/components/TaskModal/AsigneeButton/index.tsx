import React, {  useState } from 'react'
import { RiUser3Fill } from "react-icons/ri"

import styled from 'styled-components';
import { ButtonTask } from '../ButtonTask';
import { useGlobal } from '../../../context/GlobalContext';
import { Avatar } from '../../common/Avatar';

const users: User[] =[
    {
      "id": "703de395-1d49-4471-aafa-d990dcf32cd1",
      "avatar": "https://avatars.dicebear.com/api/initials/gs.svg",
      "fullName": "Grace Stone"
    },
    {
      "id": "a35d73eb-6829-4a92-ab82-43fe987ae02f",
      "avatar": "https://avatars.dicebear.com/api/initials/jd.svg",
      "fullName": "Jhon Doe"
    },
    {
      "id": "885fe214-60ac-4860-80cc-9c58179c59b4",
      "avatar": "https://avatars.dicebear.com/api/initials/rb.svg",
      "fullName": "Romeo Barnes"
    },
    {
      "id": "35ab495f-d4ac-41f5-b2e5-aec339ace950",
      "avatar": null,
      "fullName": "Ana Cristina G. Otoya Sifuentes"
    }
  ]

  interface User{
    id: string;
    avatar: string | null;
    fullName: string;
  }

  interface AsigneeButtonProps {
    user: User | null;
    setUser: (user: User) => void;
  }

export const AsigneeButton = (props: AsigneeButtonProps) => {
  
  
    const { user, setUser } = props
    const { theme } = useGlobal()
    const [isEstimateOpen, setIsEstimateOpen] = useState(false)
    
    
    
    const handleButtonClick = () => {
        // console.log(isEstimateOpen)
        setIsEstimateOpen(!isEstimateOpen);
    };

    const changeUserValues = (user:User) => {
        setUser(user)
        
       
        setIsEstimateOpen(false) 
    }

  

  return (
    <div>
        <ButtonTask text={user?.fullName !==( null || undefined  )? `${user?.fullName}` : "Asignee"} onClick={handleButtonClick}  icon={RiUser3Fill}visibleIcon={!user ? true :false} visibleImg={user ? true :false} img={user?.avatar} />

        

            {isEstimateOpen && (

                <StyledEstimateOptions  theme={theme} open={isEstimateOpen}>
                    <h3>Assign To...</h3>
                    <ListOptions theme={theme} >
                        {users.map((user) => (
                            <ItemOption theme={theme} key={user.id} onClick={() => changeUserValues(user)}>
                                <Avatar src={user.avatar? user.avatar: null} size={24} />
                               <TextContainer> {user.fullName}</TextContainer>
                            </ItemOption>
                        ))}
                    </ListOptions>
                </StyledEstimateOptions >
            )}

        </div>
  )
}

const StyledEstimateOptions = styled.div<{ open: boolean }>`
    position: absolute;
    margin-top: 5px;
    width: auto;
   
    background-color: ${(props) => props.theme.colorGrayLight};
    padding: 0.25rem 0;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colorGray};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colorWhite};

    & > h3 {
        padding: 0rem 1rem;
        color: ${(props) => props.theme.colorGray};
        font-size: ${(props) => props.theme.fontSizeLg};
    }

`

const ListOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items:start;
   
`;

const ItemOption = styled.button`
    display: flex;  
    gap: 0.5rem;
    padding: .25rem 1rem;
    width: 100%;
    align-items: center;

    &:hover {
        background-color: ${(props) => props.theme.colorGray};
    }
`
const TextContainer = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 240px;
`;
