import React from 'react';
import Styles from './BackgroundAndContainer.module.css';

const BackgroundAndContainer = ({ children }) => {
  return (
    <div className={Styles.backgroundColor}>
      <div className={Styles.container}>{children}</div>
    </div>
  );
};

export default BackgroundAndContainer;
