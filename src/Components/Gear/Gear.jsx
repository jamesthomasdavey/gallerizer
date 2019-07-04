import React from 'react';
import classes from './Gear.module.css';

const gear = props => {
  return (
    <button
      aria-label="Settings"
      aria-expanded={props.navOpen}
      className={[classes.GearIcon, classes[props.navOpen ? 'rotate' : '']].join(' ')}
      onClick={props.toggleNavHandler}
    />
  );
};

export default gear;
