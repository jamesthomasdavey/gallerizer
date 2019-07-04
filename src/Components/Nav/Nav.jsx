import React, { Component } from 'react';
import classes from './Nav.module.css';

import Toggler from './Toggler/Toggler';
import About from './About/About';

class Nav extends Component {
  render() {
    return (
      <div
        role="region"
        aria-label="Settings"
        className={[classes.wrapper, classes[this.props.navOpen ? 'open' : '']].join(' ')}
      >
        <div className="nav__menu">
          <ul className={classes.ul}>
            <li className={classes.li}>
              <button
                className={classes.navLabel}
                role="switch"
                aria-checked={this.props.isMetric}
                onClick={this.props.changeUnit}
                tabIndex={this.props.navOpen && !this.props.aboutOpen ? '0' : '-1'}
              >
                Metric
                <Toggler isEnabled={this.props.isMetric} />
              </button>
            </li>
            <li>
              <button
                className={classes.navLabel}
                role="switch"
                aria-checked={this.props.includeHeight}
                onClick={this.props.changeHeightDisplay}
                tabIndex={this.props.navOpen && !this.props.aboutOpen ? '0' : '-1'}
              >
                Height
                <Toggler isEnabled={this.props.includeHeight} />
              </button>
            </li>
            <li>
              <button
                className={classes.navLabel}
                onClick={this.props.openAbout}
                tabIndex={this.props.navOpen && !this.props.aboutOpen ? '0' : '-1'}
                aria-expanded={this.props.aboutOpen}
                id="aboutButton"
              >
                About
              </button>
            </li>
          </ul>
        </div>
        <About aboutOpen={this.props.aboutOpen} closeAbout={this.props.closeAbout} />
      </div>
    );
  }
}

export default Nav;
