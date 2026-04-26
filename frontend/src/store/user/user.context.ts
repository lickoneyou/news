'use client';
import { createContext, useContext } from 'react';
import { User } from '../../types/types';

interface UserContextValue {
  state: User;
  createUser: (user: Partial<User>) => Promise<void>;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};
