import { Theme } from "./themes";

export interface GlobalContextProps {
  theme: Theme;
  isLoading: boolean;
  collapsed: boolean;
  collapseMenu: () => void;
}
