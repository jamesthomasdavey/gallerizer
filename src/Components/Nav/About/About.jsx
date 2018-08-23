import React from "react";
import classes from "./About.module.css";

const about = props => (
  <div
    className={[classes.wrapper, classes[props.aboutOpen ? "open" : ""]].join(
      " "
    )}
  >
    <p>To use the Gallerizer, enter the parameters as labeled.</p>
    <p>
      Measuring from edge to edge, the results will indicate where to place each
      hook on the wall, assuming that each item is hung from the middle. This
      will ensure an even amount of wall space between each item.
    </p>
    <p>
      Contact:
      <br />
      <a href="mailto:james.t.davey@gmail.com">james.t.davey@gmail.com</a>.
    </p>
    <p>
      Gear icon by{" "}
      <a
        href="https://smashicons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Smashicons
      </a>{" "}
      from{" "}
      <a
        href="https://www.flaticon.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.flaticon.com
      </a>
      .
    </p>
    <button onClick={props.closeAbout} className={classes.closeButton}>
      Close
    </button>
  </div>
);

export default about;
