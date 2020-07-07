import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './AuthorisationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';

const AuthorisationForm = ({ onlogIn }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onlogIn)} className={Styles.formContainer}>
      <AuthLoginField register={register} />
      <AuthPasswordField register={register} />
      <AuthButton title="LogIn" />
    </form>
  );
};

export default AuthorisationForm;
