import { User } from '../../types/types';
import userActions, { UserActionType } from './user.actions';
import userInitialState from './user.initialState';

interface Action {
  type: UserActionType;
  payload: Partial<User>;
}

const userReducer = (state: User, action: Action) => {
  switch (action.type) {
    case userActions.CREATE:
      return { ...state, ...action.payload };
    case userActions.LOGIN:
      return { ...state, ...action.payload };
    case userActions.UPDATE:
      return state;
    default:
      return userInitialState;
  }
};

export default userReducer;
