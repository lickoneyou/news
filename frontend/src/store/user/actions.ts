const userActions = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
} as const;

export type UserActionType = typeof userActions[keyof typeof userActions];

export default userActions;
