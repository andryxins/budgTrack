import React, { useState } from 'react';
import Styles from './AuthPasswordField.module.css';
import AuthPasswordEyesBlock from './AuthPasswordEyesBlock/AuthPasswordEyesBlock';

const validationSchema = {
  minLength: {
    value: 8,
    message: "Hey!It's too short!",
  },
  maxLength: {
    value: 16,
    message: "Hey!It's too long!",
  },
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
    message: 'Password must contain 1 uppercase, 1 lowercase and digit',
  },
  required: "This field couldn't be empty",
};

type Props = {
  name: string;
  title?: string;
  register: Function;
  error?: boolean;
};

const AuthPasswordField: React.FC<Props> = ({
  title = 'Password',
  register,
  error,
  name,
}: Props) => {
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
        id={name}
        name={name}
        className={error ? Styles.passwordFieldError : Styles.passwordField}
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

export default AuthPasswordField;
