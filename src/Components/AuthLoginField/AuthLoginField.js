import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isLoginUnique } from '../../Api/ApiRequests';
import AuthLoginUniqueIcon from './AuthLoginUniqueIcon/AuthLoginUniqueIcon';
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

const AuthLoginField = ({ register, withCheckingLoginIsUnique }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoginUniqueResault, setIsLoginUniqueResault] = useState(null);

  const handleIsChecked = async () => {
    setIsChecked(true);
  };

  const handleCheckIsUnique = async ({ target }) => {
    if (target.value.length < 1) return;
    const isUnique = await isLoginUnique({ login: target.value });
    setIsLoginUniqueResault(isUnique);
  };

  return (
    <div className={Styles.container}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className={Styles.loginLabel} htmlFor="login">
        Login:
      </label>
      {withCheckingLoginIsUnique ? (
        <input
          type="text"
          onFocus={handleIsChecked}
          onBlur={handleCheckIsUnique}
          id="login"
          name="login"
          placeholder="misha@subaru.net"
          className={Styles.loginField}
          ref={register(validationSchema)}
        />
      ) : (
        <input
          type="text"
          id="login"
          name="login"
          placeholder="misha@subaru.net"
          className={Styles.loginField}
          ref={register(validationSchema)}
        />
      )}
      {isChecked
          && isLoginUniqueResault !== null && (
          <div className={Styles.loginUniqueIcon}>
            <AuthLoginUniqueIcon type={isLoginUniqueResault} />
          </div>
      )}
    </div>
  );
};

AuthLoginField.defaultProps = {
  withCheckingLoginIsUnique: false,
};

AuthLoginField.propTypes = {
  register: PropTypes.func.isRequired,
  withCheckingLoginIsUnique: PropTypes.bool,
};

export default AuthLoginField;
