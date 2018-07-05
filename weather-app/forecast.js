const request = require('request');

// get cordinates => put into 2 arguments => output
var fahrenheitToCelcius = (num) => {
	return (num - 32) * 0.5556;
}


var getCoordinates = (inputAddress) => {
// body.results[0].geometry.location
	splittedInput = encodeURIComponent(inputAddress);
	let coordinates = [];

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${splittedInput}&key=AIzaSyBzGHIxd6bzd8UCNADv8gV0pMgaNXKRxnE`,
		json: true,
		}, (error, response, body) => {
			if (body.status === "ZERO_RESULTS") {
				console.log("There are no result for this address");
			} else if (error) {
				console.log("Unable to connect to google server")
			} else if (body.status === "OK") {
				getTemperature(body.results[0].geometry.location.lat, body.results[0].geometry.location.lng, inputAddress)		
			}
	
	});
}

var getTemperature = (lat, lng, address) => {
	request({
		url: `https://api.darksky.net/forecast/1f292176aa77e898a14b882ec33cf010/${lat},${lng}`,
		json: true,
	}, (error, response, body) => {
		if (error) {
			console.log("Unable to connect to forecast services")
		} else if (body.code === 400) {
			console.log(body.error);
		} else if (response.statusCode === 200) {
			var celcius = fahrenheitToCelcius(body.currently.temperature);
			console.log("Address: " + address);
			console.log("Weather: " + body.currently.icon);
			console.log("Temperature: " + celcius + " celcius");
		}
	}); 	
};


module.exports = {
	getCoordinates,
	getTemperature,
};