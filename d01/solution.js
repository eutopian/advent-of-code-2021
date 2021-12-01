const { getNumData, getSum } = require("../helper.js");

const countIncreasing = (data) => {
  let increase = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) increase++;
  }
  return increase;
};

const countIncreasingWindows = (data) => {
  let increase = 0;
  for (let i = 3; i < data.length; i++) {
    if (data[i] > data[i - 3]) increase++;
  }
  return increase;
};

console.log(countIncreasing(getNumData("./input.txt"))); // 1star
console.log(countIncreasingWindows(getNumData("./input.txt"))); // 2star
