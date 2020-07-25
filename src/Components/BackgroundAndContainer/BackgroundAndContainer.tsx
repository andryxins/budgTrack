import React from 'react';
import Styles from './BackgroundAndContainer.module.css';

type Props = {
  children: React.ReactNodeArray | React.ReactNode;
};

const BackgroundAndContainer: React.FC<Props> = ({ children }: Props) => (
  <div className={Styles.backgroundColor}>
    <div className={Styles.container}>{children}</div>
  </div>
);

export default BackgroundAndContainer;
