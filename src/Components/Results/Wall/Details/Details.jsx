import React, { Fragment } from 'react';
import classes from './Details.module.css';

import convertToUnit from '../convertToUnit';

const details = props => {

  const { currentItemCenterPoint, wallWidth } = props;

  const position = { left: `${(currentItemCenterPoint / wallWidth) * 100 - 10}%` };

  return (
    <Fragment>
      <div className={classes.wrapperOuter} style={position}>
        <div className={classes.wrapperInner} id="innerDetails">
          <p aria-hidden="true">
            {convertToUnit(currentItemCenterPoint, props.isMetric)}
          </p>
        </div>
      </div>
      <div className={classes.marker} style={position}>
        <div className={classes.marker__inner} id="innerMarker" />
      </div>
    </Fragment>
  );
};

export default details;
