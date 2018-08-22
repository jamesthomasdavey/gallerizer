import React from "react";
import classes from "./Nav.module.css";

import Toggler from "./Toggler/Toggler";
import About from "./About/About";

const nav = props => {
  return (
    <div
      className={[classes.wrapper, classes[props.navOpen ? "open" : ""]].join(
        " "
      )}
    >
      <div className="nav__menu">
        <ul className={classes.ul}>
          <li className={classes.li}>
            <input
              className={classes.input}
              type="checkbox"
              checked={props.isMetric}
              id="isMetric"
              value="Metric"
              onChange={props.changeUnit}
            />
            <label className={classes.navLabel} htmlFor="isMetric">
              Metric
              <Toggler isEnabled={props.isMetric} />
            </label>
          </li>
          <li>
            <input
              className={classes.input}
              type="checkbox"
              checked={props.includeHeight}
              id="includeHeight"
              value="Include Height"
              onChange={props.changeHeightDisplay}
            />
            <label className={classes.navLabel} htmlFor="includeHeight">
              Height
              <Toggler isEnabled={props.includeHeight} />
            </label>
          </li>
          <li>
            <label className={classes.navLabel} onClick={props.openAbout}>
              About
            </label>
          </li>
        </ul>
      </div>
      <About aboutOpen={props.aboutOpen} closeAbout={props.closeAbout} />
    </div>
  );
};

export default nav;
