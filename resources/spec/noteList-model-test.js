// SECOND SET OF TESTS. 
// i already have an assert test, therefore am going to rely on that being accessible.. 
// I need to create an object that can hold the notes. 

(function(exports) {
  // naming the test. 
  function testOfListObject(){
    //creating the object. 
    var testNewListObject = new NoteList();
    // creating a note object
    var testNewNote = new Note("some text");
    // making a test that creates an object, adds a note to it OOP style. 
    testNewListObject.addNoteToList(testNewNote) 
    assert.isTrue(testNewListObject.list[0]) === ["some text"]
  };
  testOfListObject();
})(this);