import React, { Component } from 'react';

import classes from './Form.module.css';

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
    const longUnit = currentUnit === 'cm' ? 'centimeters' : 'inches';
    const { includeHeight, newFormValues } = this.props;

    return (
      <div className={classes.wrapper}>
        <form>
          <ul className={classes.form}>
            <li>
              <label htmlFor="wallWidth">
                Wall Width (<span aria-hidden="true">{currentUnit}</span>
                <span className="sr-only">{longUnit}</span>):
              </label>
              <input
                maxLength="4"
                type="number"
                id="wallWidth"
                ref={this.wallWidthInputRef}
                onChange={event => this.props.changeValue(event)}
                value={newFormValues.wallWidth}
                onFocus={this.props.closeNav}
              />
            </li>
            <li>
              <label htmlFor="itemWidth">
                Item Width (<span aria-hidden="true">{currentUnit}</span>
                <span className="sr-only">{longUnit}</span>):
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
                  Item Height (<span aria-hidden="true">{currentUnit}</span>
                  <span className="sr-only">{longUnit}</span>):
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
              <label htmlFor="itemQuantity">Item Quantity:</label>
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
            className={[classes.button, classes.Calculate].join(' ')}
            onClick={this.props.calculate}
          >
            Calculate
          </button>
        </form>
        <button className={[classes.button, classes.Reset].join(' ')} onClick={this.props.reset}>
          Clear
        </button>
      </div>
    );
  }
}

export default Form;
