import React, { useState } from 'react';
import Styles from './AuthPasswordField.module.css';
import AuthPasswordEyesBlock from './AuthPasswordEyesBlock/AuthPasswordEyesBlock';

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

const AuthPasswordField = ({ register }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleChangeVisibility = () => {};

  return (
    <div className={Styles.container}>
      <label className={Styles.passwordLabel} htmlFor="password">
        Password:
      </label>
      <input
        placeholder="**********"
        id="password"
        name="password"
        className={Styles.passwordField}
        ref={register(validationSchema)}
      />
      <div className={Styles.eyesBlockIcon}>
        <AuthPasswordEyesBlock />
      </div>
    </div>
  );
};

export default AuthPasswordField;
