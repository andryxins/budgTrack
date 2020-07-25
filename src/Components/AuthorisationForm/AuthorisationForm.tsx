import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './AuthorisationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';
import AuthErrorMessage from '../AuthErrorMessage/AuthErrorMessage';

type Props = {};

type inputTypes = {
  login: string;
  password: string;
};

const AuthorisationForm: React.FC<Props> = () => {
  const { register, handleSubmit, errors } = useForm<inputTypes>();

  const onHandleSubmit = (data: inputTypes): void => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className={Styles.formContainer}
    >
      <div className={Styles.loginField}>
        <AuthLoginField
          name="login"
          error={errors && errors.login ? true : false}
          register={register}
        />
      </div>

      <div className={Styles.passwordField}>
        <AuthPasswordField
          name="password"
          error={errors && errors.password ? true : false}
          register={register}
        />
      </div>

      {errors.login || errors.password ? (
        <div className={Styles.errorMessage}>
          <AuthErrorMessage
            messageText={
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
