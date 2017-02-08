export const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
