const { getArrData } = require("../helper.js");

const partOne = (list) => {
  let most = "";
  let least = "";

  for (let i = 0; i < list[0].length; i++) {
    let ones = 0;
    for (let j = 0; j < list.length && ones <= list.length / 2; j++) {
      if (list[j][i] === "1") {
        ones++;
      }
    }
    if (ones >= list.length / 2) {
      most += "1";
      least += "0";
    } else {
      most += "0";
      least += "1";
    }
  }

  return parseInt(least, 2) * parseInt(most, 2);
};

console.log(partOne(getArrData("./input.txt")));
