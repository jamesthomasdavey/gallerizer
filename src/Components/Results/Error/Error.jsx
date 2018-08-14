import React from 'react';

const error = props => {
  if (props.errorCode === 1) {
    return <p>Not enough wall space!</p>;
  }
  return null;
}

export default error;