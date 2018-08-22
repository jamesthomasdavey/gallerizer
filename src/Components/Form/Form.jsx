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
            <label htmlFor="wallWidth">
              WALL WIDTH ({currentUnit}
              ):
            </label>
            <input
              maxLength="4"
              type="number"
              id="wallWidth"
              ref={this.wallWidthInputRef}
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.wallWidth}
            />
          </li>
          <li>
            <label htmlFor="itemWidth">
              ITEM WIDTH ({currentUnit}
              ):
            </label>
            <input
              maxLength="3"
              type="number"
              id="itemWidth"
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.itemWidth}
            />
          </li>
          {includeHeight && (
            <li>
              <label htmlFor="itemHeight">
                ITEM HEIGHT ({currentUnit}
                ):
              </label>
              <input
                maxLength="3"
                type="number"
                id="itemHeight"
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.itemHeight}
              />
            </li>
          )}
          <li>
            <label htmlFor="itemQuantity">ITEM QUANTITY:</label>
            <input
              maxLength="3"
              type="number"
              id="itemQuantity"
              onChange={event => this.props.changeValue(event)}
              value={newFormValues.itemQuantity}
            />
          </li>
        </ul>
        <button
          className={[classes.button, classes.Calculate].join(" ")}
          onClick={this.props.calculate}
        >
          Calculate
        </button>
        <button
          className={[classes.button, classes.Reset].join(" ")}
          onClick={this.props.reset}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default Form;
