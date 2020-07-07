import React from 'react';
import Styles from './AuthButton.module.css';

const AuthButton = ({ title }) => {
  return (
    <button type="submit" className={Styles.button}>
      {title}
    </button>
  );
};

export default AuthButton;
