import React from "react";

import Error from "./Error/Error";
import Margin from "./Margin/Margin";
import Wall from "./Wall/Wall";

const results = props => {
  const {
    wallWidth,
    itemWidth,
    itemHeight,
    itemQuantity
  } = props.state.formValues;

  const { includeHeight } = props.state;

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
    <div>
      <Margin
        adjustMargin={event => props.adjustMargin(event)}
        state={props.state}
      />
      <Wall
        state={props.state}
        selectItem={props.selectItem}
        decreaseMargin={props.decreaseMargin}
      />
    </div>
  );
};

export default results;
