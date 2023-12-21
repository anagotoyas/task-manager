import styled from "styled-components"
import { useGlobal } from "../../context/GlobalContext"
import logo from "../../assets/images/logo.svg";
import { SidebarItem } from "./SidebarItem";
import menu from '../../utils/menu'
import { RiArrowLeftLine, RiMenuFill } from "react-icons/ri";


export const Sidebar = () => {
  const { theme, collapsed, collapseMenu } = useGlobal()

  return (
    <SidebarStyled theme={theme} collapsed={collapsed ? 'true' : 'false'}>
      <button className="toggle-nav" onClick={collapseMenu}>


        {collapsed ? <RiMenuFill size={24}/> : <RiArrowLeftLine size={24} />}
      </button>
      <img src={logo} alt="logo" />
      <div className="sidebar-items">
        <ul className="nav-items">
          {menu.map((item, index) => {
            return (

              <SidebarItem key={index} to={item.link} title={item.title} icon={item.icon} />
            )
          })}
        </ul>

      </div>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div<{ collapsed: string }>`
  position:relative;
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

  
  @media screen and (max-width: 768px) {
    position: fixed;
    height: calc(100vh - 2rem);
    z-index: 100;
    

    transition: all 0.3s cubic-bezier(0.53, 0.21, 0, 1);
    transform: ${(props) =>
    props.collapsed==='true' ? "translateX(-107%)" : "translateX(0)"};

    .toggle-nav {
      display: block !important;
    }

   
  }

  .toggle-nav {
    display: none;
    padding: 0.8rem 0.9rem;
    position: absolute;
    right: -55px;
    top: 1.8rem;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color:${(props) => props.theme.colorGray};


    background-color: ${(props) => props.theme.colorBgSidebar};
    border-right: 2px solid ${(props) => props.theme.colorGrayLight};
    border-top: 2px solid ${(props) => props.theme.colorGrayLight};
    border-bottom: 2px solid ${(props) => props.theme.colorGrayLight};
  }
  
   
  
 
`