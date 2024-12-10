const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split("");
  let num = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      num += 1;
      break;
    }
  }
  const newArr = num === 1 ? arr : arr.slice(0, arr.length - 1);
  const newNum = Number(newArr.join(""));
  return newNum;
}

module.exports = {
  deleteDigit,
};
