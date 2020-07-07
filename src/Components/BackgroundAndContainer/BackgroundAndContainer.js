import React from 'react';
import Styles from './BackgroundAndContainer.module.css';

const BackgroundAndContainer = ({ children }) => {
  return <div className={Styles.background}>{children}</div>;
};

export default BackgroundAndContainer;
