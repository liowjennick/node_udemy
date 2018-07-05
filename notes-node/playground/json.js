// var obj = {
// 	name: "Nick",
// 	stuff: "stuff",
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Nick", "age": "25"}';

// var person = JSON.parse(personString);
// console.log(person.name);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body',
};
//

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
console.log(noteString);

var note = JSON.parse(noteString);
console.log(note.title);
