import React from 'react';
import Styles from './AuthLayout.module.css';
import Logo from '../Logo/Logo';
import BackgroundAndContainer from '../BackgroundAndContainer/BackgroundAndContainer';
import TrippleCirclesDecoration from '../TrippleCirclesDecoration/TrippleCirclesDecoration';
import BigCircleDecoration from '../BigCircleDecoration/BigCircleDecoration';

const AuthLayout = ({ children }) => {
  return (
    <BackgroundAndContainer className={Styles.container}>
      <div className={Styles.trippleCirclesDecoration}>
        <TrippleCirclesDecoration />
      </div>
      <div className={Styles.logo}>
        <Logo />
      </div>
      <div className={Styles.form}>{children}</div>
      <div className={Styles.bigCircleDecoration}>
        <BigCircleDecoration />
      </div>
    </BackgroundAndContainer>
  );
};

export default AuthLayout;
