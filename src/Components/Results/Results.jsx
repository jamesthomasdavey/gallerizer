import React from "react";

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
    <div>
      <Margin
        adjustMargin={event => props.adjustMargin(event)}
        margin={props.margin}
        maxMargin={props.maxMargin}
      />
      <Wall
        formValues={props.formValues}
        margin={props.margin}
        selectItem={props.selectItem}
        selectedItemIndex={props.selectedItemIndex}
        includeHeight={props.includeHeight}
        decreaseMargin={props.decreaseMargin}
      />
    </div>
  );
};

export default results;
