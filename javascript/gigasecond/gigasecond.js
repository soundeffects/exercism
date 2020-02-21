export const gigasecond = initialDate => {
  let returnDate = new Date(initialDate);
  returnDate.setSeconds(returnDate.getSeconds() + 1000000000);
  return returnDate;
};
