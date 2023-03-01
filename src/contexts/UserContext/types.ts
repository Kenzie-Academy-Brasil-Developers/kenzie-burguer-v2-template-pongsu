import { ReactNode } from 'react';

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export interface IRegisterUser {
  password: string;
  name: string;
  email: string;
  passwordConfirm?: string;
}

export interface ILoginUser {
  password: string;
  email: string;
}

export interface IUserContext {
  user: IUser | null;
  registerUser: (data: IRegisterUser) => Promise<void>;
  loginUser: (data: ILoginUser) => Promise<void>;
  logoutUser: () => void;
}
