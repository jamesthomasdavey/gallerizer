import React, { Component } from "react";

import classes from "./Form.module.css";

class Form extends Component {
  wallWidthInputRef = React.createRef();

  componentDidMount() {
    this.resetFocus();
  }

  resetFocus() {
    this.wallWidthInputRef.current.focus();
  }

  render() {
    const currentUnit = this.props.isMetric ? `cm` : `in`;
    const { includeHeight, newFormValues } = this.props;

    return (
      <div className={classes.wrapper}>
        <ul className={classes.form}>
          <li>
            <label>
              Wall Width ({currentUnit}
              ):
              <input
                type="number"
                ref={this.wallWidthInputRef}
                data-state="wallWidth"
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.wallWidth}
              />
            </label>
          </li>
          <li>
            <label>
              Item Width ({currentUnit}
              ):
              <input
                type="number"
                data-state="itemWidth"
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.itemWidth}
              />
            </label>
          </li>
          {includeHeight && (
            <li>
              <label>
                Item Height ({currentUnit}
                ):
                <input
                  type="number"
                  data-state="itemHeight"
                  onChange={event => this.props.changeValue(event)}
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
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.itemQuantity}
              />
            </label>
          </li>
        </ul>
        <button className={classes.button} onClick={this.props.calculate}>
          Calculate
        </button>
        <button className={classes.button} onClick={this.props.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default Form;
