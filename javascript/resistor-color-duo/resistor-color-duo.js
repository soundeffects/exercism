const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
const colorCode = element => COLORS.indexOf(element);

export const decodedValue = colorArray => {
  let firstDigit = colorCode(colorArray[0]);
  let secondDigit = colorCode(colorArray[1]);
  
  return (firstDigit * 10) + secondDigit;
};
