import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import Styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <main>
      <AuthLayout>
        <div className={Styles.authForm}>
          <div></div>
        </div>
        <div className={Styles.goTo}>
          Have an account?
          <Link to={'/authorisation'}>Login</Link>
        </div>
      </AuthLayout>
    </main>
  );
};

export default RegistrationPage;
