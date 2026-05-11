const userActions = {
  CREATE: 'CREATE',
  LOGIN: 'LOGIN',
  UPDATE: 'UPDATE',
} as const;

export type UserActionType = typeof userActions[keyof typeof userActions];

export default userActions;
