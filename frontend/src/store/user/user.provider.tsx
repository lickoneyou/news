'use client';
import { useReducer, ReactNode, FC } from 'react';
import initialState from './user.initialState';
import userReducer from './user.reducer';
import { UserContext } from './user.context';
import { User } from '../../types/types';
import userActions from './user.actions';

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const createUser = async (user: Partial<User>): Promise<void> => {
    const createUser = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await createUser.json();

    dispatch({ type: userActions.CREATE, payload: data });
  };

  const login = async (user: Partial<User>): Promise<void> => {
    const request = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await request.json();

    dispatch({ type: userActions.LOGIN, payload: data });
  };

  const value = {
    state,
    createUser,
    login,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
