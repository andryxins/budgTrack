import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthorisationForm from '../../Components/AuthorisationForm/AuthorisationFormContainer';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import Styles from './AuthorisationPage.module.css';

const AuthorisationPage = ({ history, user }) => {
  // eslint-disable-next-line consistent-return
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
          <Link to="/registration">Register</Link>
        </div>
      </AuthLayout>
    </main>
  );
};

AuthorisationPage.defaultProps = {
  user: null,
};

AuthorisationPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
};

export default AuthorisationPage;
