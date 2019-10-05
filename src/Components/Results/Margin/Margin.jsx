import React, { Component } from 'react';
import classes from './Margin.module.css';

class Margin extends Component {
  state = {
    ariaLive: false
  };
  componentDidMount() {
    console.log('just mounted');
  }
  componentWillUnmount() {
    this.setState({ ariaLive: false });
  }
  adjustMargin = adjustType => {
    this.setState({ ariaLive: true }, () => {
      this.props.adjustMargin(adjustType);
    });
  };
  render() {
    return (
      <div role="region" aria-label="Margin Adjuster" className={classes.wrapper}>
        <button
          className={classes.adjuster}
          aria-label="Decrease"
          aria-describedby="marginLabel"
          onClick={() => this.adjustMargin('decrease')}
          disabled={this.props.disableDecreaseButton}
        >
          <span aria-hidden="true">-</span>
        </button>
        <span>
          <span id="marginLabel">Add Margin:</span>{' '}
          <span aria-live={this.state.ariaLive ? 'polite' : 'off'} aria-atomic="true">
            {this.props.margin}%
          </span>
        </span>
        <button
          className={classes.adjuster}
          aria-label="Increase"
          aria-describedby="marginLabel"
          onClick={() => this.adjustMargin('increase')}
          disabled={this.props.disableIncreaseButton}
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
    );
  }
}

export default Margin;
