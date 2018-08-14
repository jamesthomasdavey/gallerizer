import React from "react";

import classes from "./Ruler.module.css";

const ruler = props => {
  const { isMetric } = props.state;
  const { wallWidth } = props.state.formValues;

  const createTicks = num => {
    const markup = [];
    const inchStyle = { width: `${(1 / wallWidth) * 100}%` };
    for (let i = 0; i < Math.ceil(wallWidth); i++) {
      let currentInchStyle = { ...inchStyle };
      if (wallWidth <= 100) {
        currentInchStyle.borderRight = "1px solid black";
        if (i === 0) {
          currentInchStyle.height = "18px";
          currentInchStyle.borderLeft = "1px solid black";
          currentInchStyle.borderRight = "none";
        } else if (i === 1) {
          currentInchStyle.borderLeft = "1px solid black";
        } else if ((i + 1) % num === 0) {
          currentInchStyle.height = "18px";
        }
      } else {
        if (i === 0) {
          currentInchStyle.height = "12px";
          currentInchStyle.borderLeft = "1px solid black";
        } else if ((i + 1) % (num / 2) === 0 && (i + 1) % num !== 0) {
          currentInchStyle.borderRight = "1px solid black";
        } else if ((i + 1) % num === 0) {
          currentInchStyle.height = "12px";
          currentInchStyle.borderRight = "1px solid black";
        }
      }
      if (i === Math.ceil(wallWidth) - 1) {
        currentInchStyle.borderRight = "none";
      }
      markup.push(
        <div className={classes.inch} style={currentInchStyle} key={i} />
      );
    }
    return markup;
  };

  return (
    <div className={classes.ruler}>
      {isMetric ? createTicks(10) : createTicks(12)}
    </div>
  );
};

export default ruler;
