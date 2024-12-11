const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copyArr = arr;
  const newArr = arr.filter((a) => a !== -1).sort((a, b) => a - b);
  for (let i = 0; i < copyArr.length; i += 1) {
    if (copyArr[i] !== -1) {
      let newEl = newArr.splice(0, 1);
      copyArr.splice(i, 1, newEl[0]);
    }
  }
  return copyArr;
}

module.exports = {
  sortByHeight,
};
