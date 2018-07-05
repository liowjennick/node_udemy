// address outpus lat and lng
const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var splittedInput = encodeURIComponent(address);

		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${splittedInput}&key=AIzaSyBzGHIxd6bzd8UCNADv8gV0pMgaNXKRxnE`,
			json: true,
		}, (error, response,body) => {
			if (body.status === "ZERO_RESULTS") {
				reject("Unable to connect to google server")
			} else if (error) {
				reject("Connection error");
			} else if (body.status === "OK") {
				resolve(body)
			}
		});
	});
};

geocodeAddress(000).then((location) => {
	console.log(location.results[0].address_components);
}).catch((e) => {
	console.log(e);
})