import React from 'react';
import classes from './Wall.module.css';

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
        return (
          <WallItem
            formValues={props.formValues}
            margin={props.margin}
            includeHeight={props.includeHeight}
            selectedItemIndex={props.selectedItemIndex}
            key={index}
            index={index}
            selectItem={props.selectItem}
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
        margin={props.margin}
        selectedItemIndex={props.selectedItemIndex}
        formValues={props.formValues}
        isMetric={props.isMetric}
      />
    </div>
  );
};

export default Wall;
