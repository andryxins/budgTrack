import React from 'react';
import PropTypes from 'prop-types';
import Styles from './BackgroundAndContainer.module.css';

const BackgroundAndContainer = ({ children }) => (
  <div className={Styles.backgroundColor}>
    <div className={Styles.container}>{children}</div>
  </div>
);

BackgroundAndContainer.defaultProps = {
  children: null,
};

BackgroundAndContainer.propTypes = {
  children: PropTypes.node,
};

export default BackgroundAndContainer;
