import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosError, isAxiosError } from 'axios';

import {
  ILoginUser,
  IRegisterUser,
  IUser,
  IUserContext,
  IUserProviderProps,
} from './types';
import { api } from '../../services/api';

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const registerUser = async (data: IRegisterUser): Promise<void> => {
    delete data.passwordConfirm;
    setLoading(true);
    try {
      const response = await api.post('/users', data);
      setUser(response.data);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      toast.success('Cadastro concluido!');
      navigate('/shop');
    } catch (error: unknown | AxiosError) {
      if (!axios.isAxiosError(error)) {
        // eslint-disable-next-line no-console
        console.error(error);
      } else if (error.response?.data === 'Email already exists') {
        toast.warning('Email já cadastrado, faça o login');
      } else {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (data: ILoginUser): Promise<void> => {
    setLoading(true);
    try {
      const response = await api.post('/login', data);
      setUser(response.data);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      toast.success('Seja bem vindo!');
      navigate('/shop');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = window.localStorage.getItem('@TOKEN');
    if (authToken && window.location.pathname !== '/shop') {
      navigate('/shop');
    }
  }, [navigate]);

  const logoutUser = (): void => {
    toast.success('Sessão encerrada. Até logo !');
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ user, registerUser, loginUser, logoutUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
