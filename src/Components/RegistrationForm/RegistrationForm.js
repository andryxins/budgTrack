import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Styles from './RegistrationForm.module.css';
import AuthLoginField from '../AuthLoginField/AuthLoginField';
import AuthPasswordField from '../AuthPasswordField/AuthPasswordField';
import AuthButton from '../AuthButton/AuthButton';
import AuthErrorMessage from '../AuthErrorMessage/AuthErrorMessage';

const RegistrationForm = ({ onlogIn }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onlogIn)} className={Styles.formContainer}>
      <div className={Styles.loginField}>
        <AuthLoginField register={register} withCheckingLoginIsUnique />
      </div>

      <div className={Styles.passwordField}>
        <AuthPasswordField register={register} />
      </div>

      <div className={Styles.passwordFieldRepeat}>
        <AuthPasswordField title="Confirm password" register={register} />
      </div>

      {errors.login || errors.password
        ? (
          <div className={Styles.errorMessage}>
            <AuthErrorMessage
              message={
              (errors.login && errors.login.message)
              || (errors.password && errors.password.message)
              }
            />
          </div>
        )
        : null}

      <AuthButton title="Register" />
    </form>
  );
};

RegistrationForm.propTypes = {
  onlogIn: PropTypes.func.isRequired,
};

export default RegistrationForm;
