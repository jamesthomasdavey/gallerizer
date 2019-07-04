import React, { Fragment } from 'react';
import classes from './Details.module.css';

import convertToUnit from './convertToUnit';

const details = props => {
  let { wallWidth, itemWidth, itemQuantity } = props.formValues;

  const { margin, selectedItemIndex } = props;

  if (typeof selectedItemIndex !== `number`) {
    return null;
  }

  wallWidth = Number(wallWidth);
  itemWidth = Number(itemWidth);
  itemQuantity = Number(itemQuantity);

  const indentation = (margin / 100) * wallWidth;
  const innerWallWidth = wallWidth - indentation * 2;

  const leftoverSpace = innerWallWidth - itemWidth * itemQuantity;

  const spaceBetween = leftoverSpace / (itemQuantity + 1);

  const centerPoint =
    (selectedItemIndex + 1) * spaceBetween +
    selectedItemIndex * itemWidth +
    itemWidth / 2 +
    indentation;

  const position = { left: `${(centerPoint / wallWidth) * 100 - 10}%` };

  return (
    <Fragment>
      <div className={classes.wrapperOuter} style={position}>
        <div className={classes.wrapperInner} id="innerDetails">
          <p id="innerParagraph" aria-live="polite" aria-hidden="true">
            {convertToUnit(centerPoint, props.isMetric)}
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
