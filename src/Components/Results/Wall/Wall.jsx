import React from 'react';
import classes from './Wall.module.css';
import convertToUnit from './convertToUnit';
import getItemCenterPoint from './getItemCenterPoint';

import WallItem from './WallItem/WallItem';
import Details from './Details/Details';

const Wall = props => {
  const innerWallStyle = { width: `${100 - props.margin * 2}%` };

  const wallItems = Array(Number(props.formValues.itemQuantity))
    .fill('_')
    .map((item, index) => {
      const itemCenterPoint = getItemCenterPoint(
        props.margin,
        index,
        props.formValues
      );
      return (
        <WallItem
          formValues={props.formValues}
          margin={props.margin}
          includeHeight={props.includeHeight}
          selectedItemIndex={props.selectedItemIndex}
          key={index}
          index={index}
          selectItem={props.selectItem}
          position={convertToUnit(itemCenterPoint, props.isMetric)}
          unselect={props.unselectAll}
        />
      );
    });

  const getAccessibleMeasurement = position => {
    let newString;
    if (position.charAt(position.length - 1) === `"`) {
      newString = `${position.substring(0, position.length - 1)} inches`;
    } else {
      newString = `${position.substring(0, position.length - 2)} centimeters`;
    }
    return newString;
  };

  return (
    <div
      className={classes.outer}
      id="outer"
      onClick={e => props.unselectAll(e)}
      role="region"
      aria-label="Wall"
    >
      <div
        className={classes.inner}
        role="tablist"
        id="inner"
        style={innerWallStyle}
      >
        {wallItems}
      </div>
      {wallItems.map(wallItem => (
        <div
          role="region"
          aria-labelledby={`wallItem${wallItem.props.index + 1}`}
          key={wallItem.props.index}
          id={`wallItem${wallItem.props.index + 1}Description`}
          className="sr-only"
        >
          Center measurement is{' '}
          {getAccessibleMeasurement(wallItem.props.position)} from the left wall
          edge
        </div>
      ))}
      <Details
        currentItemCenterPoint={getItemCenterPoint(
          props.margin,
          props.selectedItemIndex,
          props.formValues
        )}
        wallWidth={props.formValues.wallWidth}
        isMetric={props.isMetric}
      />
    </div>
  );
};

export default Wall;
