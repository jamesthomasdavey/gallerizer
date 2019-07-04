import React from 'react';
import classes from './Error.module.css';

const error = props => {
  let errorString;
  switch (props.errorCode) {
    case 1:
      errorString = 'Not enough wall space!';
      break;
    case 2:
      errorString = 'Please use only positive values.';
      break;
    default:
      errorString = null;
      break;
  }
  if (!errorString) {
    setTimeout(() => {
      document.querySelector('#wallItem').focus();
    }, 1);
  }
  return (
    <p tabindex="-1" id="errorMessage" className={classes.wrapper}>
      {errorString}
    </p>
  );
};

export default error;
