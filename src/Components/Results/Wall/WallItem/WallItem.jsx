import React from 'react';
import classes from './WallItem.module.css';

const wallItem = props => {
  const { itemWidth, wallWidth, itemHeight } = props.formValues;

  const { margin, includeHeight, selectedItemIndex } = props;

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
    className.push('wallItem');
    return className.join(` `);
  };

  return (
    <div
      className={[getWallItemClass(props.index), 'wallItem'].join(' ')}
      style={wallItemStyle}
      aria-label={`Item ${props.index + 1}`}
      role="region"
      id={`wallItem`}
      tabIndex="0"
      onClick={() => props.selectItem(props.index)}
      onFocus={() => props.selectItem(props.index)}
      aria-describedby="innerParagraph"
    >
      <div className={classes.content}>
        <p>{props.index + 1}</p>
      </div>
    </div>
  );
};

export default wallItem;
