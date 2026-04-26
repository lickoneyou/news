'use client'
import { useReducer, ReactNode, FC } from 'react';
import initialState from './initialState';
import userReducer from './reducer';
import { UserContext } from './useContext';

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
