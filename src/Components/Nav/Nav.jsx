import React from "react";

import classes from "./Nav.module.css";

const nav = props => {
  return (
    <div className={classes.wrapper}>
      <div className="nav__menu">
        <ul className="nav__menu-list">
          <li>
            <select
              id="unit"
              onChange={props.changeUnit}
              defaultValue={props.state.isMetric ? "centimeters" : "inches"}
            >
              <option value="inches" className="unit">
                INCHES
              </option>,
              <option value="centimeters" className="unit">
                CENTIMETERS
              </option>
            </select>
          </li>
          <li>
            <input
              type="checkbox"
              checked={props.state.includeHeight}
              id="includeHeight"
              value="Include Height"
              onChange={props.changeHeightDisplay}
            />
            <label htmlFor="includeHeight">INCL. HEIGHT</label>
          </li>
          <li>
            <div id="about">
              <p>ABOUT</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default nav;
