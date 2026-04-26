'use client';
import { createContext, Dispatch, useContext } from 'react';
import { User } from './types';
import { UserActionType } from './actions';

interface Action {
  type: UserActionType;
  payload?: unknown;
}

interface UserContextValue {
  state: User;
  dispatch: Dispatch<Action>;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};
