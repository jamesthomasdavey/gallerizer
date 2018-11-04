import React from "react";
import classes from "./About.module.css";

const about = props => (
  <div
    className={[classes.wrapper, classes[props.aboutOpen ? "open" : ""]].join(
      " "
    )}
  >
    <p>
      Use the Gallerizer to visualize and measure the even placement of decor
      items on your wall.
    </p>
    <p>
      Measuring from the left edge, the results indicate where to place each
      hook on the wall, given that each item is hung from the middle. This will
      ensure an even amount of space between each item.
    </p>
    <p>
      Contact:
      <br />
      <a href="mailto:james.t.davey@gmail.com">james.t.davey@gmail.com</a>.
    </p>
    <button onClick={props.closeAbout} className={classes.closeButton}>
      Close
    </button>
  </div>
);

export default about;
