import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const AuthPasswordField = ({ title, register }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handleChangeVisibility = () => {
    setIsPassVisible(!isPassVisible);
  };

  return (
    <div className={Styles.container}>
      <label className={Styles.passwordLabel} htmlFor="password">
        {title}
      </label>
      <input
        type={isPassVisible ? 'text' : 'password'}
        placeholder="**********"
        id="password"
        name="password"
        className={Styles.passwordField}
        ref={register(validationSchema)}
      />
      <div className={Styles.eyesBlockIcon}>
        <AuthPasswordEyesBlock
          toggled={isPassVisible}
          handleToggle={handleChangeVisibility}
        />
      </div>
    </div>
  );
};

AuthPasswordField.defaultProps = {
  title: 'Password:',
};

AuthPasswordField.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func.isRequired,
};

export default AuthPasswordField;
