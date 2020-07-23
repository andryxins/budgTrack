import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './AuthorisationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';
import AuthErrorMessage from '../AuthErrorMessage/AuthErrorMessage';

type Props = {};

const AuthorisationForm: React.FC<Props> = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)} className={Styles.formContainer}>
      <div className={Styles.loginField}>
        <AuthLoginField register={register} />
      </div>

      <div className={Styles.passwordField}>
        <AuthPasswordField register={register} />
      </div>

      {errors.login || errors.password ? (
        <div className={Styles.errorMessage}>
          <AuthErrorMessage
            message={
              (errors.login && errors.login.message) ||
              (errors.password && errors.password.message)
            }
          />
        </div>
      ) : null}

      <AuthButton title="LogIn" />
    </form>
  );
};

export default AuthorisationForm;
