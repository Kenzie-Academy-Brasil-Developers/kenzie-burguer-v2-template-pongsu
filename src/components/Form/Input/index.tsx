import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password';
  error?: FieldError;
  register: UseFormRegisterReturn<string>;
}

const Input = ({ label, type, error, register }: IInputProps) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    {error && (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    )}
  </fieldset>
);

export default Input;
