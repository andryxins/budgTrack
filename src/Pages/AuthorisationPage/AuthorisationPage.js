import React, { Component } from 'react';
import AuthorisationForm from '../../Components/AuthorisationForm/AuthorisationFormContainer';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import Logo from '../../Components/Logo/Logo';
import Styles from './AuthorisationPage.module.css';

class AuthorisationPage extends Component {
  componentDidMount() {
    const { user, history } = this.props;
    if (user) history.replace('/');
  }

  componentDidUpdate() {
    const { user, history } = this.props;
    if (user) history.replace('/');
  }
  render() {
    return (
      <main>
        <AuthLayout>
          <AuthorisationForm />
        </AuthLayout>
      </main>
    );
  }
}

export default AuthorisationPage;
