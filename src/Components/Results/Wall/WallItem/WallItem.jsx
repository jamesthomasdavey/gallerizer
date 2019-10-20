import React from "react";
import classes from "./WallItem.module.css";

const wallItem = props => {
  const { itemWidth, wallWidth, itemHeight } = props.formValues;
  const { margin, includeHeight, selectedItemIndex, position } = props;

  const getWallItemWidthPercent = () => {
    let innerWallWidthPercent = 100 - margin * 2;
    let modifier = 100 / innerWallWidthPercent;
    return (itemWidth / wallWidth) * 100 * modifier;
  };

  const getWallItemHeightPercent = () => {
    if (includeHeight && itemHeight !== ``) {
      return (itemHeight / itemWidth) * 100 * (getWallItemWidthPercent() / 100);
    } else {
      return getWallItemWidthPercent();
    }
  };

  const wallItemStyle = {
    width: `${getWallItemWidthPercent()}%`,
    paddingTop: `${getWallItemHeightPercent()}%`,
    position: `relative`
  };

  const getWallItemClass = index => {
    let className = [classes.wrapper];
    className.push(selectedItemIndex === index ? classes.active : null);
    className.push("wallItem");
    return className.join(` `);
  };

  const getAccessibleMeasurement = position => {
    let newString;
    if (position.charAt(position.length - 1) === `"`) {
      newString = `${position.substring(0, position.length - 1)} inches`;
    } else {
      newString = `${position.substring(0, position.length - 2)} centimeters`;
    }
    return newString;
  };

  getAccessibleMeasurement(position);

  return (
    <div
      className={[getWallItemClass(props.index), "wallItem"].join(" ")}
      style={wallItemStyle}
      aria-label={`Item ${props.index + 1}`}
      aria-describedby={`item${props.index + 1}Description`}
      role="figure"
      id={`wallItem`}
      tabIndex="0"
      onClick={() => props.selectItem(props.index)}
      onFocus={() => props.selectItem(props.index)}
      onKeyDown={e => props.unselect(e)}
    >
      <div aria-hidden="true" className={classes.content}>
        <p>{props.index + 1}</p>
        <span id={`item${props.index + 1}Description`} className="sr-only">
          Center measurement is {getAccessibleMeasurement(position)} from the
          left wall edge
        </span>
      </div>
    </div>
  );
};

export default wallItem;
