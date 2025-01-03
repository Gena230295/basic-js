const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newNames = names;
  let ind = 1;
  for (let i = 0; i < newNames.length; i += 1) {
    let secInd = 1;
    for (let s = ind; s < newNames.length; s += 1) {
      if (newNames[i] === newNames[s]) {
        newNames[s] = `${newNames[s]}(${secInd})`;
        secInd += 1;
      }
    }
    secInd = 1;
    ind += 1;
  }
  return newNames;
}

module.exports = {
  renameFiles,
};
