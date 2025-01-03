const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const newArr = [];
    for (let s = 0; s < matrix[i].length; s++) {
      newArr.push(0);
    }
    arr.push(newArr);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let s = 0; s < matrix[i].length; s++) {
      if (matrix[i][s] === true) {
        if (arr[i][s + 1] !== undefined) {
          arr[i][s + 1] += 1;
        }
        if (arr[i][s - 1] !== undefined) {
          arr[i][s - 1] += 1;
        }
        if (arr[i + 1] !== undefined) {
          arr[i + 1][s] += 1;
        }
        if (arr[i - 1] !== undefined) {
          arr[i - 1][s] += 1;
        }
        if (arr[i + 1] !== undefined) {
          if (arr[i + 1][s + 1] !== undefined) {
            arr[i + 1][s + 1] += 1;
          }
          if (arr[i + 1][s - 1] !== undefined) {
            arr[i + 1][s - 1] += 1;
          }
        }
        if (arr[i - 1] !== undefined) {
          if (arr[i - 1][s + 1] !== undefined) {
            arr[i - 1][s + 1] += 1;
          }
          if (arr[i - 1][s - 1] !== undefined) {
            arr[i - 1][s - 1] += 1;
          }
        }
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper,
};
