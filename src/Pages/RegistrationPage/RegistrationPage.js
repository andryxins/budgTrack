import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import Styles from './RegistrationPage.module.css';

const RegistrationPage = ({ history, user }) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (user) return history.replace('/');
  }, [history, user]);

  return (
    <main>
      <AuthLayout>
        <div className={Styles.authForm}>
          <RegistrationForm />
        </div>
        <div className={Styles.goTo}>
          Have an account?
          <Link to="/authorisation">Login</Link>
        </div>
      </AuthLayout>
    </main>
  );
};

RegistrationPage.defaultProps = {
  user: null,
};

RegistrationPage.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  user: PropTypes.objectOf(PropTypes.any),
};

export default RegistrationPage;
