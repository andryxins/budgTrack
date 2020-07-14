import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AuthButton.module.css';

const AuthButton = ({ title }) => (
  <button type="submit" className={Styles.button}>
    {title}
  </button>
);

AuthButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AuthButton;
