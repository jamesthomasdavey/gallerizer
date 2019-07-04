import React from 'react';
import classes from './About.module.css';

const about = props => (
  <div
    role="region"
    aria-label="About"
    className={[classes.wrapper, classes[props.aboutOpen ? 'open' : '']].join(' ')}
  >
    <div tabIndex="-1" id="aboutContent" className={classes.aboutContent}>
      <p>
        Use the Gallerizer to visualize and measure the even placement of decor items on your wall.
      </p>
      <p>
        Measuring from the left edge, the results indicate where to place each hook on the wall,
        given that each item is hung from the middle. This will ensure an even amount of space
        between each item.
      </p>
    </div>
    <p>
      Contact:
      <br />
      <a tabIndex={props.aboutOpen ? '0' : '-1'} href="mailto:james.t.davey@gmail.com">
        james.t.davey@gmail.com
      </a>
      .
    </p>
    <button
      tabIndex={props.aboutOpen ? '0' : '-1'}
      onClick={props.closeAbout}
      className={classes.closeButton}
      aria-label="Close About"
    >
      <span aria-hidden="true">Close</span>
    </button>
  </div>
);

export default about;
