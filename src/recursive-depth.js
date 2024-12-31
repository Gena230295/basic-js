const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    function funcCalculateDepth(arr) {
      let count = 1;
      let check = 0;
      for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
          check += 1;
        }
      }
      if (check === 0) {
        return count;
      }
      return count + funcCalculateDepth(arr.flat(1));
    }
    return funcCalculateDepth(arr);
  }
}

module.exports = {
  DepthCalculator,
};
