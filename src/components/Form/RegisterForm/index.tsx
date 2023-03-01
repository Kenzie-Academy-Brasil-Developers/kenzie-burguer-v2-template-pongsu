import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';

import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterUser } from '../../../contexts/UserContext/types';
import { UserContext } from '../../../contexts/UserContext';

interface IRegisterFormValues extends IRegisterUser {
  passwordConfirm: 'string';
}

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const schema = yup.object({
    name: yup.string().required('É preciso informar seu nome'),
    email: yup
      .string()
      .required('É preciso informar seu email')
      .email('E-mail inválido'),
    password: yup
      .string()
      .required('É preciso cadastrar uma senha')
      .matches(/.{6,}/, 'Deve conter no mínimo 6 caracteres'),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      )
      .required('A confirmação da senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({ resolver: yupResolver(schema) });

  return (
    <StyledForm onSubmit={handleSubmit(registerUser)}>
      <Input
        label='Nome'
        type='text'
        register={register('name')}
        error={errors.name}
      />
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
      <Input
        label='Confirme a senha'
        type='password'
        register={register('passwordConfirm')}
        error={errors.passwordConfirm}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
