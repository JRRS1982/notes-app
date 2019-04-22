
var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed :( " + assertionToCheck + "is not true")
    } else {
      console.log("Well done, you passed!!!!" + " -- " + assertionToCheck)
    }
  }
};

console.log("'Assert is true' helper is locked in and loaded for action!!");
