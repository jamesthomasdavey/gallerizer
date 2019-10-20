const getItemCenterPoint = (margin, itemIndex, formValues) => {
    let { wallWidth, itemWidth, itemQuantity } = formValues;
    wallWidth = Number(wallWidth);
    itemWidth = Number(itemWidth);
    itemQuantity = Number(itemQuantity);

    const indentation = (margin / 100) * wallWidth;
    const innerWallWidth = wallWidth - indentation * 2;
  
    const leftoverSpace = innerWallWidth - itemWidth * itemQuantity;
  
    const spaceBetween = leftoverSpace / (itemQuantity + 1);
  
    const centerPoint =
      (itemIndex + 1) * spaceBetween +
      itemIndex * itemWidth +
      itemWidth / 2 +
      indentation;
  
    return centerPoint
}

export default getItemCenterPoint