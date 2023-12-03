import styled from "styled-components"
import { Card } from "../components/Card"
import { useGlobal } from "../context/GlobalContext"



const tasks = [
  {
    "id": "1f69ac5f-8563-4020-b877-73f3c7d40e0f",
    "creator": {
      "id": "a35d73eb-6829-4a92-ab82-43fe987ae02f",
      "avatar": "https://avatars.dicebear.com/api/initials/jd.svg",
      "fullName": "Jhon Doe"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-11-30T09:49:03.975Z",
    "name": "Ticket3",
    "pointEstimate": "TWO",
    "position": 1,
    "status": "BACKLOG",
    "tags": [
      "ANDROID"
    ]
  },
  {
    "id": "de980353-d100-4934-9d07-f4f7929601a7",
    "creator": {
      "id": "a35d73eb-6829-4a92-ab82-43fe987ae02f",
      "avatar": "https://avatars.dicebear.com/api/initials/jd.svg",
      "fullName": "Jhon Doe"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-10T09:49:03.975Z",
    "name": "Ticket5",
    "pointEstimate": "EIGHT",
    "position": 1,
    "status": "TODO",
    "tags": [
      "RAILS",
      "NODE_JS"
    ]
  },
  {
    "id": "baf20941-4a18-4a94-8521-d105090d1abd",
    "creator": {
      "id": "885fe214-60ac-4860-80cc-9c58179c59b4",
      "avatar": "https://avatars.dicebear.com/api/initials/rb.svg",
      "fullName": "Romeo Barnes"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-11-30T09:49:03.975Z",
    "name": "Ticket8",
    "pointEstimate": "EIGHT",
    "position": 2,
    "status": "TODO",
    "tags": [
      "RAILS"
    ]
  },
  {
    "id": "7b012e5c-3136-4bf1-94b9-7da0d89d2153",
    "creator": {
      "id": "703de395-1d49-4471-aafa-d990dcf32cd1",
      "avatar": "https://avatars.dicebear.com/api/initials/gs.svg",
      "fullName": "Grace Stone"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-03T09:49:03.974Z",
    "name": "Ticket1",
    "pointEstimate": "EIGHT",
    "position": 3,
    "status": "TODO",
    "tags": [
      "ANDROID",
      "REACT"
    ]
  },
  {
    "id": "c6cfab2b-5d7d-4356-ac21-a634d6712d2b",
    "creator": {
      "id": "a35d73eb-6829-4a92-ab82-43fe987ae02f",
      "avatar": "https://avatars.dicebear.com/api/initials/jd.svg",
      "fullName": "Jhon Doe"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-06T09:49:03.975Z",
    "name": "Ticket4",
    "pointEstimate": "ZERO",
    "position": 4,
    "status": "TODO",
    "tags": [
      "REACT"
    ]
  },
  {
    "id": "0fc93132-e322-4019-ac1c-fd1a34232fbe",
    "creator": {
      "id": "885fe214-60ac-4860-80cc-9c58179c59b4",
      "avatar": "https://avatars.dicebear.com/api/initials/rb.svg",
      "fullName": "Romeo Barnes"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-01T09:49:03.975Z",
    "name": "Ticket7",
    "pointEstimate": "TWO",
    "position": 5,
    "status": "TODO",
    "tags": [
      "REACT",
      "NODE_JS"
    ]
  },
  {
    "id": "6e2fdd1f-713e-4d96-85af-30f109302a05",
    "creator": {
      "id": "35ab495f-d4ac-41f5-b2e5-aec339ace950",
      "avatar": null,
      "fullName": "Ana Cristina G. Otoya Sifuentes"
    },
    "createdAt": "2023-11-30T19:43:38.650Z",
    "dueDate": "2023-11-06T19:43:35.000Z",
    "name": "probando",
    "pointEstimate": "ONE",
    "position": 6,
    "status": "TODO",
    "tags": [
      "IOS",
      "REACT"
    ]
  },
  {
    "id": "ae0bb632-9844-464e-80bd-d4474dcd59f6",
    "creator": {
      "id": "885fe214-60ac-4860-80cc-9c58179c59b4",
      "avatar": "https://avatars.dicebear.com/api/initials/rb.svg",
      "fullName": "Romeo Barnes"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-02T09:49:03.975Z",
    "name": "Ticket6",
    "pointEstimate": "TWO",
    "position": 1,
    "status": "IN_PROGRESS",
    "tags": [
      "ANDROID",
      "IOS"
    ]
  },
  {
    "id": "683933d9-b650-4672-bef3-4248cbe909b5",
    "creator": {
      "id": "703de395-1d49-4471-aafa-d990dcf32cd1",
      "avatar": "https://avatars.dicebear.com/api/initials/gs.svg",
      "fullName": "Grace Stone"
    },
    "createdAt": "2023-11-28T22:44:15.147Z",
    "dueDate": "2023-12-04T09:49:03.975Z",
    "name": "Ticket2",
    "pointEstimate": "FOUR",
    "position": 1,
    "status": "CANCELLED",
    "tags": [
      "ANDROID",
      "RAILS"
    ]
  }
]

export const Dashboard = () => {

  const { theme } = useGlobal()

  const statuses = ["BACKLOG", "TODO", "IN_PROGRESS", "DONE", "CANCELLED"];


  const filteredTasks = (selectedStatus: string) => {
    return tasks.filter(
      (task) =>
        (task.status === selectedStatus)
    );
  };

  const countTasksByStatus = (status: string) => {
    return tasks.filter((task) => task.status === status).length;
  }





  return (
    <StyledHeader theme={theme}>

      {statuses.map((status, index) => (
        <StyledColumn key={index} theme={theme}>
          
            <h2>{status} ({countTasksByStatus(status)})</h2>


          
          <StyledRow theme={theme} key={status}>


            {filteredTasks(status).map((task, index) => (
              <Card
                key={index}
                title={task.name}
                points={task.pointEstimate}
                tags={task.tags}
                avatar={task.creator.avatar || null}
                dueDate={task.dueDate}
              />
            ))}
          </StyledRow>

        </StyledColumn>

      ))}




    </StyledHeader>



  )
}
const StyledHeader = styled.div`
    width: full;
   overflow-x: auto;
   overflow-y: hidden;
    display: flex;
    flex-direction: row;
    gap:1rem;
    position: relative;
   

  
`
const StyledColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 356px;
  h2 {
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: 600;
      color: ${(props) => props.theme.colorWhite};}


  
`;
const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 356px;
  overflow-y:auto;
  
`