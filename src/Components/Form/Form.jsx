import React from "react";

import classes from "./Form.module.css";

const form = props => {
  const currentUnit = props.state.isMetric ? `cm` : `in`;
  const { includeHeight, newFormValues } = props.state;

  return (
    <div className={classes.wrapper}>
      <ul className={classes.form}>
        <li>
          <label>
            Wall Width ({currentUnit}):
            <input
              type="number"
              data-state="wallWidth"
              onChange={event => props.changeValue(event)}
              value={newFormValues.wallWidth}
            />
          </label>
        </li>
        <li>
          <label>
            Item Width ({currentUnit}):
            <input
              type="number"
              data-state="itemWidth"
              onChange={event => props.changeValue(event)}
              value={newFormValues.itemWidth}
            />
          </label>
        </li>
        {includeHeight && (
          <li>
            <label>
              Item Height ({currentUnit}):
              <input
                type="number"
                data-state="itemHeight"
                onChange={event => props.changeValue(event)}
                value={newFormValues.itemHeight}
              />
            </label>
          </li>
        )}
        <li>
          <label>
            Item Quantity:
            <input
              type="number"
              data-state="itemQuantity"
              onChange={event => props.changeValue(event)}
              value={newFormValues.itemQuantity}
            />
          </label>
        </li>
      </ul>
      <button className={classes.button} onClick={props.calculate}>
        Calculate
      </button>
      <button className={classes.button} onClick={props.reset}>
        Reset
      </button>
    </div>
  );
};

export default form;
