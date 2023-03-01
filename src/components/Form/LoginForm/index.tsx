import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { UserContext } from '../../../contexts/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { ILoginUser } from '../../../contexts/UserContext/types';

const schema = yup.object({
  email: yup
    .string()
    .required('É preciso informar seu email')
    .email('E-mail inválido'),
  password: yup
    .string()
    .required('É preciso informar sua senha')
    .matches(/.{6,}/, 'Deve conter no mínimo 6 caracteres'),
});

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>({ resolver: yupResolver(schema) });

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
      <Input
        label='Email'
        type='email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
