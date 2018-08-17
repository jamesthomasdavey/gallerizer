import React from "react";

import classes from "./Nav.module.css";

const nav = props => {
  const wrapperClasses = [classes.wrapper];
  if (props.navOpen) {
    wrapperClasses.push(classes.open);
  }

  return (
    <div className={wrapperClasses.join(" ")}>
      <div className="nav__menu">
        <ul className="nav__menu-list">
          <li>
            <input
              type="checkbox"
              checked={props.isMetric}
              id="isMetric"
              value="Metric"
              onChange={props.changeUnit}
            />
            <label className={classes.navItem} htmlFor="isMetric">
              Metric
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              checked={props.includeHeight}
              id="includeHeight"
              value="Include Height"
              onChange={props.changeHeightDisplay}
            />
            <label className={classes.navItem} htmlFor="includeHeight">
              Incl. Height
            </label>
          </li>
          <li>
            <div id="about">
              <p className={classes.navItem}>About</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default nav;
