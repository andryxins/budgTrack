import React from 'react';
import Styles from './AuthErrorMessage.module.css';

type Props = {
  messageText?: string | {};
};

const AuthErrorMessage: React.FC<Props> = ({ messageText }: Props) => (
  <p className={Styles.message}>{messageText}</p>
);

export default AuthErrorMessage;
