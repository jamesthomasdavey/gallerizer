import React from "react";
import classes from "./Wall.module.css";

import WallItem from "./WallItem/WallItem";
import Details from "./Details/Details";
import Ruler from "./Ruler/Ruler";

const Wall = props => {
  const innerWallStyle = () => {
    return { width: `${100 - props.state.margin * 2}%` };
  };

  const wallItems = () => {
    const wallItems = [];
    for (let i = 0; i < props.state.formValues.itemQuantity; i++) {
      wallItems.push(
        <WallItem
          state={props.state}
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
      <Details state={props.state} />
      <Ruler state={props.state} />
    </div>
  );
};

export default Wall;
