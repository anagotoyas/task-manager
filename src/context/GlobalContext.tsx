import React, { createContext, useState, useContext, ReactNode } from "react";
import { themes, Theme } from "./themes";
import { GlobalContextProps } from "./types";

const initialContextValue: GlobalContextProps = {
  theme: themes[0], 
  isLoading: false,
  collapsed: false,
  collapseMenu: () => {},

};

const GlobalContext = createContext<GlobalContextProps>(initialContextValue);

interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedTheme, setSelectedTheme] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);


  const theme: Theme = themes[selectedTheme];

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const contextValue: GlobalContextProps = {
    theme,
    isLoading,
    collapsed,
    collapseMenu,
   
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
};
