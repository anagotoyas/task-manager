import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useGlobal } from "../../../context/GlobalContext";

import { IconType } from "react-icons";



interface SidebarItemProps {
  to: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: IconType | any;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { icon: Icon } = props;

  const { theme } = useGlobal()
  const location = useLocation();




  return (
    <StyledSidebarItem theme={theme} to={props.to}>
      <li className={`nav-item ${props.to === "/" ? (props.to === location.pathname ? "active" : "") : location.pathname.includes(props.to) ? "active" : ""}`}>
        <Icon size={24} />
        {props.title}
      </li>

    </StyledSidebarItem>
  )
}

const StyledSidebarItem = styled(NavLink)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	padding: 16px;
	transition: 0.3s;
	text-decoration: none;
	background-color: transparent;
	color: ${(props) => props.theme.colorGray};


  &.active {
    background: ${(props) => props.theme.gradientColorSidebar};
    color: ${(props) => props.theme.colorRedPrimary};

  }
  .nav-item{
    
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: 40px 1fr;
    cursor: pointer;
    align-items: center;
    font-weight: 600;

  }
 
  .active::before {
    position: absolute;
      content: "";
      right: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: ${(props) => props.theme.colorRedPrimary};
      transition: all 0.3s ease-in-out;


    width: 0.25rem;
  }
  



`;

