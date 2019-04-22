// FIRST SET OF TESTS. 
// THIS CREATES AN ISTRUE CHECKER WITHIN 'ASSERTION'. 

var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed :( " + assertionToCheck)
    } else {
      console.log("Well done, you passed!!!!" + " -- " + assertionToCheck)
    };
  }
};

(function() {
  //NAME THE TEST
  function testOfNote() {
    //CREATE THE OBJECT
    var thisNewNote = new Note("some text");
    //PASSING IN THE TEST
    assert.isTrue(thisNewNote.returnNoteText() === "some text")
  };
  //calling the method after it has been created. 
  testOfNote();
})(this);