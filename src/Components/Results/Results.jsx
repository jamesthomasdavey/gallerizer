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
  } else if (
    itemWidth < 0 ||
    itemQuantity < 0 ||
    wallWidth < 0 ||
    (includeHeight && itemHeight < 0)
  ) {
    return <Error errorCode={2} />;
  }

  return (
    <div className={classes.Results}>
      <div className={classes.innerResults}>
        <button
          className={classes.back}
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
          unselectAll={props.unselectAll}
        />
        <button
          className={classes.forward}
          onClick={() => props.selectItem(props.selectedItemIndex + 1)}
          disabled={props.disableNextButton}
        >
          <span>&raquo;</span>
        </button>
      </div>
      <Margin
        adjustMargin={event => props.adjustMargin(event)}
        margin={props.margin}
        disableDecreaseButton={props.disableDecreaseButton}
        disableIncreaseButton={props.disableIncreaseButton}
      />
    </div>
  );
};

export default results;
