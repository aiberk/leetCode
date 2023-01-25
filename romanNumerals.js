/**
 * @param {string} s
 * @return {number}
 */

const romanNumerals = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};
var romanToInt = function (s) {
  const stringArray = s.split("");
  let unitArray = [];
  let finalInt = 0;

  stringArray.map((item) => {
    if (romanNumerals.hasOwnProperty(item)) {
      unitArray.push(romanNumerals[item]);
    }
  });

  unitArray.map((item, index) => {
    if (index == unitArray.length - 1) {
      finalInt = finalInt + item;
    }
    if (item >= unitArray[index + 1]) {
      finalInt = finalInt + item;
    } else if (item < unitArray[index + 1]) {
      let needed = unitArray[index + 1] - item;
      let negativeValue = needed - unitArray[index + 1];
      finalInt = finalInt + negativeValue;
    }
  });
  return finalInt;
};
