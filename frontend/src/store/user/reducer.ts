import { User } from "./types"
import userActions, { UserActionType } from "./actions"

interface Action {
  type: UserActionType,
  payload?: unknown
}

const userReducer = (state: User, action: Action) => {
  switch(action.type) {
    case userActions.CREATE:
    case userActions.UPDATE:
      return state
    default:
      return state
  }
}

export default userReducer