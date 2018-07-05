const request = require('request');

var getLocation = (inputAddress) => {
	splittedInput = encodeURIComponent(inputAddress);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${splittedInput}&key=AIzaSyBzGHIxd6bzd8UCNADv8gV0pMgaNXKRxnE`,
		json: true,
		}, (error, response, body) => {
			if (body.status === "ZERO_RESULTS") {
				console.log("There are no result for this address");
			} else if (error) {
				console.log("Unable to connect to google server")
			} else if (body.status === "OK")	{
				console.log('Coordinates', JSON.stringify(body.results[0].geometry.location, undefined, 2));			
			}
		// console.log('error:', error);
		// console.log('statusCode:', response && response.statusCode);

	});

};

module.exports = {
	getLocation,
};