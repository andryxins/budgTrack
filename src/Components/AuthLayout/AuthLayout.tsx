import React from 'react';
import Styles from './AuthLayout.module.css';
import Logo from '../Logo/Logo';
import BackgroundAndContainer from '../BackgroundAndContainer/BackgroundAndContainer';
import TrippleCirclesDecoration from '../TrippleCirclesDecoration/TrippleCirclesDecoration';
import BigCircleDecoration from '../BigCircleDecoration/BigCircleDecoration';

type Props = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({ children }: Props) => (
  <BackgroundAndContainer>
    <div className={Styles.container}>
      <div className={Styles.trippleCirclesDecoration}>
        <TrippleCirclesDecoration />
      </div>
      <div className={Styles.logo}>
        <Logo />
      </div>
      <div className={Styles.childrenContent}>{children}</div>
      <div className={Styles.bigCircleDecoration}>
        <BigCircleDecoration />
      </div>
    </div>
  </BackgroundAndContainer>
);

export default AuthLayout;
