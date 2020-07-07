import React, { useEffect } from 'react';
import AuthorisationForm from '../../Components/AuthorisationForm/AuthorisationFormContainer';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import Styles from './AuthorisationPage.module.css';
import { Link } from 'react-router-dom';

const AuthorisationPage = ({ history, user }) => {
  useEffect(() => {
    if (user) return history.replace('/');
  }, [user, history]);

  return (
    <main>
      <AuthLayout>
        <div className={Styles.authForm}>
          <AuthorisationForm />
        </div>
        <div className={Styles.goTo}>
          Do not have account?
          <Link to={'/registration'}>Register</Link>
        </div>
      </AuthLayout>
    </main>
  );
};

export default AuthorisationPage;
