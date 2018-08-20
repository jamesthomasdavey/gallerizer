import React from "react";
import classes from "./Toggler.module.css";

const toggler = props => (
  <div
    className={[
      classes.wrapper,
      classes[props.isEnabled ? "isEnabled" : ""]
    ].join(" ")}
  >
    <div
      className={[
        classes.circle,
        classes[props.isEnabled ? "isEnabled" : ""]
      ].join(" ")}
    />
  </div>
);

export default toggler;
