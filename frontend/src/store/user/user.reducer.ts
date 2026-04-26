import { User } from '../../types/types';
import userActions, { UserActionType } from './user.actions';
import userInitialState from './user.initialState';

interface Action {
  type: UserActionType;
  payload?: unknown;
}

const userReducer = (state: User, action: Action) => {
  switch (action.type) {
    case userActions.CREATE:
      return { ...state };
    case userActions.UPDATE:
      return state;
    default:
      return userInitialState;
  }
};

export default userReducer;
