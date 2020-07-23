import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import Styles from './RegistrationPage.module.css';

type Props = {
  history: any;
  user: {} | null;
};

const RegistrationPage: React.FC<Props> = ({ history, user }: Props) => {
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

export default RegistrationPage;
