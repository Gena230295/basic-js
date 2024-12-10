const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  const longestArr = arr1.length >= arr2.length ? arr1 : arr2;
  const shortestArr = arr1.length < arr2.length ? arr1 : arr2;
  let num = 0;
  for (let i = 0; i < shortestArr.length; i += 1) {
    for (let s = 0; s < longestArr.length; s += 1) {
      if (shortestArr[i] === longestArr[s]) {
        longestArr.splice(s, 1);
        num += 1;
        break;
      }
    }
  }
  return num;
}

module.exports = {
  getCommonCharacterCount,
};
