const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split("");
  const newArr = [];
  let num = 1;
  for (let i = 0; i < arr.length; i += 1) {
    const obj = {};
    obj[arr[i]] = num;
    num += 1;
    if (arr[i] !== arr[i + 1]) {
      newArr.push(obj);
      num = 1;
    }
  }
  let newStr = "";
  for (i = 0; i < newArr.length; i += 1) {
    if (Object.values(newArr[i])[0] !== 1) {
      newStr += Object.values(newArr[i]);
    }
    newStr += Object.keys(newArr[i]);
  }
  return newStr;
}

module.exports = {
  encodeLine,
};
