import styled from "styled-components";
import { useGlobal } from "../context/GlobalContext";
import profile_pic from "../assets/images/default_profile.jpg"
import moment from "moment";


const user =
{
    "id": "35ab495f-d4ac-41f5-b2e5-aec339ace950",
    "avatar": null,
    "createdAt": "2023-11-28T22:44:15.130Z",
    "email": "ana20otoya@gmail.com",
    "fullName": "Ana Cristina G. Otoya Sifuentes",
    "updatedAt": "2023-11-28T22:44:15.130Z",
    "type": "CANDIDATE"

}

export const Profile = () => {

    const { theme } = useGlobal()


    return (
        <StyledContainer theme={theme}>
            <h1>Profile</h1>
            <StyledUser theme={theme}>
                <StyledImg src={profile_pic} alt="profile" />
                <StyledInfo theme={theme}>
                <p>
                        <span>Full name: </span>
                        {user.fullName}
                    </p>
                    <p>
                        <span>Email: </span>
                        {user.email}
                    </p>
                    <p>
                        <span>Type: </span>
                        {user.type}
                    </p>
                </StyledInfo>
                <StyledInfo theme={theme}>
                    <p>
                        <span>Member since: </span>
                        {moment(user.createdAt).format('YYYY-MM-DD')}
                    </p>
                    <p>
                        <span>Last update: </span>
                        {moment(user.updatedAt).format('YYYY-MM-DD')}
                    </p>

                </StyledInfo>
            </StyledUser>
        </StyledContainer>
    );
}
const StyledContainer = styled.div`
    background-color: ${(props) => props.theme.colorBgSidebar};
    color: ${(props) => props.theme.colorWhite};
    border-radius: 1rem;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colorGrayLight};
    }

    h1{
        font-size: ${(props) => props.theme.fontSizeLg};
        font-weight: 600;
        letter-spacing: 0.75px;
        color: ${(props) => props.theme.colorWhite};
        margin-bottom: 2rem;
    }


    `
const StyledUser = styled.div`
grid-template-columns: .5fr 1fr 1fr;
display: grid;
flex-wrap: wrap;
gap: 1rem;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}

`
const StyledImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height:10rem;
    object-fit: cover;
    border-radius: 50%;
    column-span: 1;
    `
const StyledInfo = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:start;
    gap: 1rem;
    column-span: 1.5;

    & span {
        font-size: ${(props) => props.theme.fontSizeMd};
        font-weight: 600;
        letter-spacing: 0.75px;
        color: ${(props) => props.theme.colorRedPrimary};
    }
    `