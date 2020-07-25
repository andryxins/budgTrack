import React from 'react';
import { useForm } from 'react-hook-form';
import Styles from './RegistrationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';
import AuthErrorMessage from '../AuthErrorMessage/AuthErrorMessage';

type Props = {};

type inputTypes = {
  login: string;
  password: string;
  repeatPassword: string;
};

const RegistrationForm: React.FC<Props> = () => {
  const { register, handleSubmit, errors, setError } = useForm<inputTypes>();

  const onHandleSubmit = (data: inputTypes): void => {
    if (data.password !== data.repeatPassword) {
      setError('repeatPassword', {
        message: 'Passwords must be equal!',
      });
    }

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
          withCheckingLoginIsUnique
        />
      </div>

      <div className={Styles.passwordField}>
        <AuthPasswordField
          name="password"
          error={errors && errors.password ? true : false}
          register={register}
        />
      </div>

      <div className={Styles.passwordFieldRepeat}>
        <AuthPasswordField
          name="repeatPassword"
          error={errors && errors.repeatPassword ? true : false}
          title="Confirm password"
          register={register}
        />
      </div>

      {errors.login || errors.password || errors.repeatPassword ? (
        <div className={Styles.errorMessage}>
          <AuthErrorMessage
            messageText={
              (errors.login && errors.login.message) ||
              (errors.password && errors.password.message) ||
              (errors.repeatPassword && errors.repeatPassword.message) ||
              (errors.repeatPassword &&
                errors.repeatPassword.types &&
                errors.repeatPassword.types.message)
            }
          />
        </div>
      ) : null}

      <AuthButton title="Register" />
    </form>
  );
};

export default RegistrationForm;
