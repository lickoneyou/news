export interface User {
  email: string;
  avatar: string;
  role: string;
  name: string;
}

export interface Message {
  email?: string,
  message: string,
  statusCode?: number
}
