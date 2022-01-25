var fs = require("fs");

module.exports = {
  getData: (input) => {
    return fs.readFileSync(input, "utf8").split("\n");
  },
  getDataInt: (input) => {
    return fs.readFileSync(input, "utf8").split("\n").map(Number);
  },
  getArrData: (input) => {
    return fs
      .readFileSync(input, "utf8")
      .split("\n")
      .map((a) => a.split(""));
  },
  getMinMax: (input) => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] < min) min = input[i];
      if (input[i] > max) max = input[i];
    }

    return [min, max];
  },
  getSum: (input) => {
    return input.reduce((acc, curr) => (acc += curr));
  },
};
