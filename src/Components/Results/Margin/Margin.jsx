import React from 'react';
import classes from './Margin.module.css';

const margin = props => {
  return (
    <div role="region" aria-label="Margin" className={classes.wrapper}>
      <button
        className={classes.adjuster}
        data-type="decrease"
        aria-label="Decrease"
        aria-describedby="marginLabel"
        onClick={props.adjustMargin}
        disabled={props.disableDecreaseButton}
      >
        <span aria-hidden="true">-</span>
      </button>
      <span>
        <span id="marginLabel">Add Margin:</span>{' '}
        <span aria-live="polite" aria-atomic="true">
          {props.margin}%
        </span>
      </span>
      <button
        className={classes.adjuster}
        data-type="increase"
        aria-label="Increase"
        aria-describedby="marginLabel"
        onClick={props.adjustMargin}
        disabled={props.disableIncreaseButton}
      >
        <span aria-hidden="true">+</span>
      </button>
    </div>
  );
};

export default margin;
