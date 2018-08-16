const convertToUnit = (number, isMetric) => {
  if (!isMetric) {
    return toFraction(Math.round(16 * number) / 16) + `"`;
  } else {
    return Math.round(10 * number) / 10 + "cm";
  }
};

const toFraction = number => {
  if (number % 1 === 0) {
    return number.toString();
  } else {
    let newNumber = "";
    newNumber += number - (number % 1);
    newNumber += ` ${decimalToFraction(number % 1)}`;
    return newNumber;
  }
};

const decimalToFraction = number => {
  var numerator = 1.0;
  var denominator = 1.0;
  if (number === 0.0) {
    return "0/1";
  }
  var isNegative = number < 0.0;
  if (isNegative) {
    number = number - number * 2;
  }
  while (numerator / denominator !== number) {
    if (numerator / denominator < number) {
      numerator++;
      denominator--;
    } else if (numerator / denominator > number) {
      denominator++;
    }
  }
  if (isNegative) {
    return "-" + numerator.toString() + "/" + denominator.toString();
  }
  return numerator.toString() + "/" + denominator.toString();
};

export default convertToUnit;
