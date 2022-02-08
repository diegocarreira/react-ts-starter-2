import React, { createContext, useState } from 'react';

type RootContextType = {
  drawerMobileOpen: boolean;
  setDrawerMobileOpen: (value: boolean) => void;
};

type RootContextProviderProps = {
  children: React.ReactNode;
};

export const RootContext = createContext({} as RootContextType);

export const RootContextProvider = ({ children }: RootContextProviderProps) => {
  const [drawerMobileOpen, setDrawerMobileOpen] = useState<boolean>(false);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <RootContext.Provider value={{ drawerMobileOpen, setDrawerMobileOpen }}>
      {children}
    </RootContext.Provider>
  );
};
