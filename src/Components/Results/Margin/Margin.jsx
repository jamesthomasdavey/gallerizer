import React from "react";
import classes from "./Margin.module.css";

const margin = props => {
  return (
    <div className={classes.wrapper}>
      <button
        className={classes.adjuster}
        data-type="decrease"
        onClick={props.adjustMargin}
        disabled={props.disableDecreaseButton}
      >
        -
      </button>
      <span>Add Margin: {props.margin}%</span>
      <button
        className={classes.adjuster}
        data-type="increase"
        onClick={props.adjustMargin}
        disabled={props.disableIncreaseButton}
      >
        +
      </button>
    </div>
  );
};

export default margin;
