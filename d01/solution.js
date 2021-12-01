const { getNumData, getSum } = require("../helper.js");

const countIncreasing = (data) => {
  let increase = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) increase++;
  }
  return increase;
};

const countIncreasingWindows = (data) => {
  return countIncreasing(getWindows(data));
};

const getWindows = (data) => {
  let windows = [];
  for (let i = 0; i < data.length - 3; i++) {
    windows.push(getSum(data.slice(i, i + 3)));
  }
  return windows;
};

console.log(countIncreasing(getNumData("./input.txt"))); // 1star
console.log(countIncreasingWindows(getNumData("./input.txt"))); // 2star
