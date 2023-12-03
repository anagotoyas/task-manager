import styled from "styled-components"
import { useGlobal } from "../../context/GlobalContext"
import logo from "../../assets/images/logo.svg";
import { SidebarItem } from "./SidebarItem";
import menu from '../../utils/menu'


export const Sidebar = () => {
  const { theme } = useGlobal()
  
  return (
    <SidebarStyled theme={theme}>
      <img src={logo} alt="logo" />
      <div className="sidebar-items">
        <ul className="nav-items">
          {menu.map((item, index) => {
          return(
            
            <SidebarItem key={index} to={item.link} title={item.title} icon={item.icon} />
          )})}
        </ul>

      </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
  background-color: ${props => props.theme.colorBgSidebar};
  width: ${props => props.theme.widthSidebar};
  border-radius: 24px;
  height: full;
  padding-top:12px;

  img {
    width: 40px;
	  height: 36px;
	  margin-left: auto;
	  margin-right: auto;
    
  }
  .nav-items {
    margin-top:44px;
  }

  
 
  
   
  
 
`