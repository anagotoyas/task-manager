import { ReactNode } from 'react';
import { RiFunctionLine as GridIcon, RiMenuFill as MenuIcon } from 'react-icons/ri';

interface MenuItem {
  id: number;
  title: string;
  icon: ReactNode;
  link: string;
}

const menu: MenuItem[] = [
  {
    id: 1,
    title: "DASHBOARD",
    icon: GridIcon,
    link: "/",
  },
  {
    id: 2,
    title: "MY TASK",
    icon: MenuIcon,
    link: "/my-task",
  },
];

export default menu;
