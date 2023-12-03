import { Searchbar } from "./Searchbar"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import menu from "../../utils/menu"
import { Option } from "./Option"
import { RiAddLine } from "react-icons/ri"
import { useGlobal } from "../../context/GlobalContext"

export const Navbar = () => {

    const { theme } = useGlobal()


    const location = useLocation()
    const pathname = location.pathname;

    return (
        <>
            <Searchbar />

            <Container>
                <ContainerIcons>
                    {
                        menu.slice().reverse().map((item, index) => (
                            <Option key={index} to={item.link} icon={item.icon} active={item.link === pathname} />
                        )

                        )}


                </ContainerIcons>
                <ContainerAdd theme={theme}>
                    <AddIcon theme={theme} size={24} style={{ minWidth: "24px" }} />

                </ContainerAdd>

            </Container>




        </>
    )
}

const ContainerIcons = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    grid-template-columns: 1fr 1fr;
    height: 4.5rem;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
`
const ContainerAdd = styled.div`
    background-color: ${(props) => props.theme.colorRedPrimary};
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    
`

const AddIcon = styled(RiAddLine)`
    color: ${(props) => props.theme.colorWhite};
    transition: 0.3s;
    &:hover {
        scale: 1.2;
    }
`
