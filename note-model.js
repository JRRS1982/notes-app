// MODULE PATTERN
// (function () {
//   var EXCLAMATION_MARK_COUNT = 5

//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   };
// })();


// method to return the note text 
(function(bob) {

  function newNote(text) {
    this.aText = text;
  };

  newNote.prototype.returnNoteText = function() { 
    return this.aText;
  };

  bob.newNote = newNote;
})(this);
