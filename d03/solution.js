const { getArrData } = require("../helper.js");

const partOne = (list) => {
  let mostBits = "";

  for (let i = 0; i < list[0].length; i++) {
    let ones = 0;
    for (let j = 0; j < list.length; j++) {
      if (list[j][i] === "1") {
        ones++;
      }
    }
    if (ones >= list.length / 2) {
      mostBits += "1";
    } else {
      mostBits += "0";
    }
  }

  most = parseInt(mostBits, 2);
  least = most ^ (Math.pow(2, mostBits.length) - 1);
  return most * least;
};

console.log(partOne(getArrData("./input.txt")));
