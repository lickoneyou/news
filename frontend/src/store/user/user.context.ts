'use client';
import { createContext, useContext } from 'react';
import { Message, User } from '../../types/types';

interface UserContextValue {
  state: User;
  createUser: (user: Partial<User>) => Promise<Message | void>;
  login: (user: Partial<User>) => Promise<Message | void>;
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
