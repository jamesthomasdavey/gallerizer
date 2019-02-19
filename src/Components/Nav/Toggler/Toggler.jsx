import React from 'react';
import classes from './Toggler.module.css';

const toggler = props => (
  <div
    role="switch"
    aria-checked={props.isEnabled}
    aria-label="Enable"
    className={[classes.wrapper, classes[props.isEnabled ? 'isEnabled' : '']].join(' ')}
  >
    <div className={[classes.circle, classes[props.isEnabled ? 'isEnabled' : '']].join(' ')} />
  </div>
);

export default toggler;
