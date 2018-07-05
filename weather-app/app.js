const yargs = require('yargs');
const geocode = require('./geocode.js');
const forecast = require('./forecast.js');

var command = process.argv[2];
const argv = yargs
	.options({
		cord:{
			demand: false,
			alias: 'coordinates',
			describe: 'Find coordinates for address, need to follow up with address',
		},
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true,
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

if (command === "cord") {
	var location = argv.a;
	console.log(`Getting coordinates of ${location}...`);
	geocode.getLocation(location);
} else if (command === "temp") {
	var location = argv.a
	console.log(`Getting temperature of coordinates`);
	forecast.getCoordinates(location);
}




