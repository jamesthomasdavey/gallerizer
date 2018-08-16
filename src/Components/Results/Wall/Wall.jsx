import React from "react";
import classes from "./Wall.module.css";

import WallItem from "./WallItem/WallItem";
import Details from "./Details/Details";

const Wall = props => {
  const innerWallStyle = () => {
    return { width: `${100 - props.margin * 2}%` };
  };

  const wallItems = () => {
    const wallItems = [];
    for (let i = 0; i < props.formValues.itemQuantity; i++) {
      wallItems.push(
        <WallItem
          formValues={props.formValues}
          margin={props.margin}
          includeHeight={props.includeHeight}
          selectedItemIndex={props.selectedItemIndex}
          key={i}
          index={i}
          selectItem={props.selectItem}
        />
      );
    }
    return wallItems;
  };

  return (
    <div className={classes.outer}>
      <div className={classes.inner} style={innerWallStyle()}>
        {wallItems()}
      </div>
      <Details
        margin={props.margin}
        selectedItemIndex={props.selectedItemIndex}
        formValues={props.formValues}
        isMetric={props.isMetric}
      />
    </div>
  );
};

export default Wall;
