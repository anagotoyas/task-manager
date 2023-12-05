import styled from "styled-components"
import { RiNotification3Line, RiSearchLine } from "react-icons/ri"
import profile from '../../../assets/images/profile.jpg'
import { useGlobal } from "../../../context/GlobalContext"

export const Searchbar = () => {

    const { theme } = useGlobal()
    

    return (
        <SearchbarStyled theme={theme}>
            <RiSearchLine size={24} style={{ minWidth: "24px" }} />
            <StyledInput theme={theme} type="text" placeholder="Search"/>

            <RiNotification3Line size={24} style={{ minWidth: "24px" }} />
            <StyledImg src={profile} alt="profile" />
        </SearchbarStyled>
    )
}

const SearchbarStyled = styled.div`
    background-color: ${props => props.theme.colorBgSidebar};
    height: 60px;
    border-radius: 1rem;
    gap: 1.5rem;
    display: flex;
    align-items: center;
    padding: 12px 24px;
    color: ${props => props.theme.colorGray};
`
const StyledInput = styled.input`
	width: 100%;
	border: none;
	background-color: transparent;
    color: ${(props) => props.theme.colorWhite};

    &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }

	font-size: ${(props) => props.theme.fontSizeSm};

    &:focus {
		outline: none;
	}

    &::placeholder {
        color: ${(props) => props.theme.colorGray};
    }
    
`;

const StyledImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

