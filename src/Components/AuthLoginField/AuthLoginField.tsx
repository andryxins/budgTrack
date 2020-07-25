import React, { useState } from 'react';
import { isLoginUnique } from '../../Api/ApiRequests';
import AuthLoginUniqueIcon from './AuthLoginUniqueIcon/AuthLoginUniqueIcon';
import ErrorIcon from '../ErrorIcon/ErrorIcon';
import Styles from './AuthLoginField.module.css';

const validationSchema = {
  pattern: {
    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    message: "It's must be valid Email",
  },
  required: "This field couldn't be empty",
};

type Props = {
  register: Function;
  error?: boolean;
  withCheckingLoginIsUnique?: boolean;
  name: string;
};

type isChecked = boolean;
type isLoginUniqueResault = boolean | null;

const AuthLoginField: React.FC<Props> = ({
  register,
  withCheckingLoginIsUnique,
  error,
  name,
}: Props) => {
  const [isChecked, setIsChecked] = useState<isChecked>(false);
  const [isLoginUniqueResault, setIsLoginUniqueResault] = useState<
    isLoginUniqueResault
  >(null);

  const handleIsChecked = async () => {
    setIsChecked(true);
  };

  const handleCheckIsUnique = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.value.length < 1) return;
    const isUnique = await isLoginUnique({
      login: target.value,
    });
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
          id={name}
          name={name}
          placeholder="misha@subaru.net"
          className={error ? Styles.loginFieldError : Styles.loginField}
          ref={register(validationSchema)}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          placeholder="misha@subaru.net"
          className={error ? Styles.loginFieldError : Styles.loginField}
          ref={register(validationSchema)}
        />
      )}
      {!error && isChecked && isLoginUniqueResault !== null && (
        <div className={Styles.loginUniqueIcon}>
          <AuthLoginUniqueIcon type={isLoginUniqueResault} />
        </div>
      )}
      {error && (
        <div className={Styles.ErrorIcon}>
          <ErrorIcon />
        </div>
      )}
    </div>
  );
};

export default AuthLoginField;
