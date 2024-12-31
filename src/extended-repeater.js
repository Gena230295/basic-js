const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additionStr = "";
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes !== undefined && options.additionRepeatTimes > 0) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        if (options.additionSeparator !== undefined) {
          if (i < options.additionRepeatTimes - 1) {
            additionStr += `${options.addition}${options.additionSeparator}`;
          } else {
            additionStr += `${options.addition}`;
          }
        } else {
          if (i < options.additionRepeatTimes - 1) {
            additionStr += `${options.addition}|`;
          } else {
            additionStr += `${options.addition}`;
          }
        }
      }
    } else {
      additionStr += options.addition;
    }
  }

  let mainStr = "";
  if (options.repeatTimes !== undefined && options.repeatTimes > 0) {
    for (let i = 0; i < options.repeatTimes; i++) {
      if (options.separator !== undefined) {
        if (i < options.repeatTimes - 1) {
          mainStr += `${str}${additionStr}${options.separator}`;
        } else {
          mainStr += `${str}${additionStr}`;
        }
      } else {
        if (i < options.repeatTimes - 1) {
          mainStr += `${str}${additionStr}+`;
        } else {
          mainStr += `${str}${additionStr}`;
        }
      }
    }
  } else {
    mainStr += `${str}${additionStr}`;
  }
  return mainStr;
}

module.exports = {
  repeater,
};
