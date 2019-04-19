// using the module pattern for creating the object - encapsulation. 
(function(exports) {
  // creating the object / function - constructor.
  function NoteList() {
    // create an array to hold the note objects in.  
    this.list = [];
  };
  // creating a method to add a note to the list. 
  NoteList.prototype.addNoteToList = function(noteToAdd) {
    this.list.push(noteToAdd)
    console.log(this[1])
  };
  
  exports.NoteList = NoteList;
})(this);