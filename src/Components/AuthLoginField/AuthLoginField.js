import React from 'react';
import Styles from './AuthLoginField.module.css';

const validationSchema = {
  minLength: {
    value: 3,
    message: "Hey!It's too short!",
  },
  maxLength: {
    value: 16,
    message: "Hey!It's too long!",
  },
  required: "This field couldn't be empty",
};

const AuthLoginField = ({ register }) => {
  return (
    <div className={Styles.container}>
      <label className={Styles.loginLabel} htmlFor="login">
        Login:
      </label>
      <input
        id="login"
        name="login"
        placeholder="misha@subaru.net"
        className={Styles.loginField}
        ref={register(validationSchema)}
      />
    </div>
  );
};

export default AuthLoginField;
