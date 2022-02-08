import React, { createContext } from 'react';

import { User } from '../models/User';
import useStorage from '../services/storage/useStorage';

type UserContextType = {
  user?: User;
  setUser: (user: User) => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useStorage('user');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
