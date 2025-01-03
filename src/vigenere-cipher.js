const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mainEncDec) {
    if (this.mainEncDec === undefined || this.mainEncDec === true) {
      this.mainEncDec = mainEncDec;
    }
  }

  encrypt(mainStr, keyStr) {
    if (mainStr === undefined || keyStr === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const strCopy = mainStr.toUpperCase();
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str1 = "";
    for (let i = 0; i < mainStr.length; i++) {
      if (alph.includes(mainStr[i].toUpperCase())) {
        str1 += mainStr[i].toUpperCase();
      }
    }
    const str2 = keyStr
      .repeat(Math.ceil(str1.length / keyStr.length))
      .toUpperCase();
    let indx1 = [];
    let indx2 = [];
    for (let i = 0; i < str1.length; i++) {
      indx1.push(alph.indexOf(str1[i]));
      indx2.push(alph.indexOf(str2[i]));
    }
    const enc = [];
    for (let i = 0; i < indx1.length; i++) {
      enc.push((alph.length + indx1[i] + indx2[i]) % alph.length);
    }
    const encText = [];
    for (let i = 0; i < enc.length; i++) {
      encText.push(alph[enc[i]]);
    }
    let finStr = "";
    let encInd = 0;
    for (let i = 0; i < strCopy.length; i++) {
      if (alph.includes(strCopy[i])) {
        finStr += encText[encInd];
        encInd += 1;
      } else {
        finStr += strCopy[i];
      }
    }
    const revStr = finStr.split("").reverse().join("");
    if (this.mainEncDec === false) {
      return revStr;
    }
    return finStr;
  }
  decrypt(mainStr, keyStr) {
    if (mainStr === undefined || keyStr === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const strCopy = mainStr.toUpperCase();
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str1 = "";
    for (let i = 0; i < mainStr.length; i++) {
      if (alph.includes(mainStr[i].toUpperCase())) {
        str1 += mainStr[i].toUpperCase();
      }
    }
    const str2 = keyStr
      .repeat(Math.ceil(str1.length / keyStr.length))
      .toUpperCase();
    let indx1 = [];
    let indx2 = [];
    for (let i = 0; i < str1.length; i++) {
      indx1.push(alph.indexOf(str1[i]));
      indx2.push(alph.indexOf(str2[i]));
    }
    const enc = [];
    for (let i = 0; i < indx1.length; i++) {
      enc.push((alph.length + indx1[i] - indx2[i]) % alph.length);
    }
    const encText = [];
    for (let i = 0; i < enc.length; i++) {
      encText.push(alph[enc[i]]);
    }
    let finStr = "";
    let encInd = 0;
    for (let i = 0; i < strCopy.length; i++) {
      if (alph.includes(strCopy[i])) {
        finStr += encText[encInd];
        encInd += 1;
      } else {
        finStr += strCopy[i];
      }
    }
    const revStr = finStr.split("").reverse().join("");
    if (this.mainEncDec === false) {
      return revStr;
    }
    return finStr;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
