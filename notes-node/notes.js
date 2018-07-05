console.log('starting notes.js');
// module.exports.addNote = () => {
// 	console.log("addNote was called");
// 	return "New note";
// }

// module.exports.add = (a, b) => {
// 	var answer = a + b;
// 	return answer;
// }
const fs = require('fs');
const _ = require('lodash');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {
	var note = {
		title,
		body
	};

	notes = fetchNotes();

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	} else {
		console.log("Title already exist");
	}

};

var getAll = () => {
	notes = fetchNotes();

	notes.map((note) => console.log(note.title + ":" + note.body));
};

var readNote = (title) => {

	var notes = fetchNotes();

	var notesArray = [];

		var filteredNotes = notes.filter((note) => note.title === title);

		if (filteredNotes.length > 0) {
			filteredNotes.map((note) => console.log(note.body));
		} else {
			console.log("Your database does not contain this note");
		}

};

var removeNote = (title) => {
	console.log("Removing note: " + title);

	var notes = fetchNotes();

	filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	// need to add console log whether anything was removed
}


module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote,
};

