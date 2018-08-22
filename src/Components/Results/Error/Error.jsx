import React from "react";
import classes from "./Error.module.css";

const error = props => {
  let errorString;
  switch (props.errorCode) {
    case 1:
      errorString = "Not enough wall space!";
      break;
    case 2:
      errorString = "Please use only positive values.";
      break;
    default:
      errorString = null;
      break;
  }
  return (
    <p className={classes.wrapper}>{errorString}</p>
  )
};

export default error;
