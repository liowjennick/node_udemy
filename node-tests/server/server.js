const express = require('express');


// starting up
var app = express();

// define route
app.get('/', (req, res) => {
	res.status(200).send({
		error: "Page not found",
		name: "Todo App v1.0"
	})
});

app.get('/users', (req, res) => {
	res.status(200).send([
		{
			name: "Nick",
			age: 23
		}, {
			name: "Stuffy",
			age: 22
		}
	]);
});

// port
app.listen(3000);

module.exports.app = app;
