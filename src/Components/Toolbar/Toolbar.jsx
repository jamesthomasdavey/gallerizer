import React from "react";
import classes from "./Toolbar.module.css";

const toolbar = props => (
  <div aria-hidden={props.navOpen} className={classes.wrapper}>
    <h1 className={classes.header}>Gallerizer</h1>
  </div>
)

export default toolbar;