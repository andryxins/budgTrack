import React from 'react';
import Styles from './AuthErrorMessage.module.css';

type Props = {
  message: string;
};

const AuthErrorMessage: React.FC<Props> = ({ message }: Props) => (
  <p className={Styles.message}>{message}</p>
);

export default AuthErrorMessage;
