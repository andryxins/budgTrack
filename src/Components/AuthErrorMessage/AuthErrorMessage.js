import React from 'react';
import PropTypes from 'prop-types';

import Styles from './AuthErrorMessage.module.css';

const AuthErrorMessage = ({ message }) => (
  <p className={Styles.message}>{message}</p>
);

AuthErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AuthErrorMessage;
