import React from "react";

import classes from "./Results.module.css";

import Error from "./Error/Error";
import Margin from "./Margin/Margin";
import Wall from "./Wall/Wall";

const results = props => {
  const { wallWidth, itemWidth, itemHeight, itemQuantity } = props.formValues;

  const { includeHeight } = props;

  if (
    !wallWidth ||
    wallWidth === `0` ||
    (!itemWidth || itemWidth === `0`) ||
    (includeHeight && itemHeight === `0`) ||
    (!itemQuantity || itemQuantity === `0`)
  ) {
    return null;
  }

  if (itemWidth * itemQuantity > wallWidth) {
    return <Error errorCode={1} />;
  }

  return (
    <div className={classes.Results}>
      <Margin
        adjustMargin={event => props.adjustMargin(event)}
        margin={props.margin}
        disableDecreaseButton={props.disableDecreaseButton}
        disableIncreaseButton={props.disableIncreaseButton}
      />
      <div className={classes.innerResults}>
        <button
          className={classes.previousButton}
          onClick={() => props.selectItem(props.selectedItemIndex - 1)}
          disabled={props.disablePreviousButton}
        >
          <span>&laquo;</span>
        </button>
        <Wall
          formValues={props.formValues}
          margin={props.margin}
          selectItem={props.selectItem}
          selectedItemIndex={props.selectedItemIndex}
          includeHeight={props.includeHeight}
          decreaseMargin={props.decreaseMargin}
          isMetric={props.isMetric}
        />
        <button
          className={classes.nextButton}
          onClick={() => props.selectItem(props.selectedItemIndex + 1)}
          disabled={props.disableNextButton}
        >
          <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default results;
