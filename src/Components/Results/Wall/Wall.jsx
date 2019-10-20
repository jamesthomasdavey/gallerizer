import React from 'react';
import classes from './Wall.module.css';
import convertToUnit from './convertToUnit';
import getItemCenterPoint from './getItemCenterPoint';

import WallItem from './WallItem/WallItem';
import Details from './Details/Details';

const Wall = props => {
  const innerWallStyle = () => {
    return { width: `${100 - props.margin * 2}%` };
  };

  const wallItems = () => {
    return Array(Number(props.formValues.itemQuantity))
      .fill('_')
      .map((item, index) => {
        const itemCenterPoint = getItemCenterPoint(props.margin, index, props.formValues);
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
  };

  return (
    <div
      className={classes.outer}
      id="outer"
      onClick={e => props.unselectAll(e)}
      role="region"
      aria-label="Wall"
    >
      <div className={classes.inner} id="inner" style={innerWallStyle()}>
        {wallItems()}
      </div>
      <Details
        currentItemCenterPoint={getItemCenterPoint(props.margin, props.selectedItemIndex, props.formValues)}
        wallWidth={props.formValues.wallWidth}
        isMetric={props.isMetric}
      />
    </div>
  );
};

export default Wall;
