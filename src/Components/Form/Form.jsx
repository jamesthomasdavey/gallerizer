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
            <label for="wallWidth">
              WALL WIDTH ({currentUnit}
              ):
            </label>
            <input
              type="number"
              id="wallWidth"
              ref={this.wallWidthInputRef}
              data-state="wallWidth"
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.wallWidth}
            />
          </li>
          <li>
            <label for="itemWidth">
              ITEM WIDTH ({currentUnit}
              ):
            </label>
            <input
              type="number"
              id="itemWidth"
              data-state="itemWidth"
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.itemWidth}
            />
          </li>
          {includeHeight && (
            <li>
              <label for="itemHeight">
                ITEM HEIGHT ({currentUnit}
                ):
              </label>
              <input
                type="number"
                id="itemHeight"
                data-state="itemHeight"
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.itemHeight}
              />
            </li>
          )}
          <li>
            <label for="itemQuantity">
              ITEM QUANTITY:
            </label>
            <input
              type="number"
              id="itemQuantity"
              data-state="itemQuantity"
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.itemQuantity}
            />
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
