import React from "react";
import classes from "./Margin.module.css";

const margin = props => {
  const getDecreaseButton = () => {
    if (props.margin > 0) {
      return (
        <button
          className={classes.adjuster}
          data-type="decrease"
          onClick={props.adjustMargin}
        >
          -
        </button>
      );
    } else {
      return (
        <button className={classes.adjuster} data-type="decrease">
          -
        </button>
      );
    }
  };

  const getIncreaseButton = () => {
    if (props.margin + 1 <= props.maxMargin) {
      return (
        <button
          className={classes.adjuster}
          data-type="increase"
          onClick={props.adjustMargin}
        >
          +
        </button>
      );
    } else {
      return (
        <button className={classes.adjuster} data-type="increase">
          +
        </button>
      );
    }
  };

  return (
    <div className={classes.wrapper}>
      {getDecreaseButton()}
      <span>Add Margin: {props.margin}%</span>
      {getIncreaseButton()}
    </div>
  );
};

export default margin;
