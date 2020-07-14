import React from 'react';
import PropTypes from 'prop-types';
import Styles from './AuthLoginUniqueIcon.module.css';

const AuthLoginUnique = ({ type }) => (type ? (
  <>
    <p className={Styles.messageUnique}>Login is unique</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="15px"
      viewBox="0 0 32.296 32.296"
      stroke="#41ff07"
      fill="#41ff07"
    >
      <path
        d="M31.923,9.14L13.417,27.642c-0.496,0.494-1.299,0.494-1.793,0L0.37,16.316
            c-0.494-0.496-0.494-1.302,0-1.795l2.689-2.687c0.496-0.495,1.299-0.495,1.793,0l7.678,7.729L27.438,4.654
            c0.494-0.494,1.297-0.494,1.795,0l2.689,2.691C32.421,7.84,32.421,8.646,31.923,9.14z"
      />
    </svg>
  </>
) : (
  <>
    <p className={Styles.messageNotUnique}>Login is alredy exist</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="15px"
      viewBox="0 0 410.42 410.42"
      stroke="#BA352D"
      fill="#BA352D"
    >
      <path d="M205.21,0C92.057,0,0,92.057,0,205.21s92.057,205.21,205.21,205.21s205.21-92.057,205.21-205.21S318.364,0,205.21,0z
      M331.21,229.631c0,5.5-4.5,10-10,10h-232c-5.5,0-10-4.5-10-10V180.79c0-5.5,4.5-10,10-10h232c5.5,0,10,4.5,10,10V229.631z"
      />
    </svg>
  </>
)
);

AuthLoginUnique.propTypes = {
  type: PropTypes.bool.isRequired,
};

export default AuthLoginUnique;
