import React from 'react';
import Styles from './AuthButton.module.css';

type Props = {
  title: string;
};

const AuthButton: React.FC<Props> = ({ title }: Props) => (
  <button type="submit" className={Styles.button}>
    {title}
  </button>
);

export default AuthButton;
