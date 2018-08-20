import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = props => (
  <div
    className={[classes.wrapper, classes[props.navOpen ? "visible" : ""]].join(
      " "
    )}
    onClick={props.closeNav}
  />
);

export default backdrop;
