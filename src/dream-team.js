const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const arr = [];
  for (let i = 0; i < members.length; i += 1) {
    if (typeof members[i] === "string") {
      arr.push(members[i].trim().toUpperCase());
    }
  }

  const sortArr = arr.sort();

  let str = "";
  for (let i = 0; i < sortArr.length; i += 1) {
    str += sortArr[i][0];
  }
  return str;
}

module.exports = {
  createDreamTeam,
};
