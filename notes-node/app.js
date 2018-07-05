console.log("Starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ' + command);
console.log(process.argv);
console.log(yargs.argv);

if (command === 'add') {
	console.log("adding new note");
	notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
	console.log('listing all notes');
	notes.getAll();

} else if (command === 'read') {
	console.log('reading notes');
	notes.readNote(argv.title);

} else if (command === 'remove') {
	console.log('removing notes'); 
	notes.removeNote(argv.title);
	
}
 else {
	console.log('command not recognised');

}





