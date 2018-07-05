const MongoClient = require('mongodb').MongoClient;

// 2 argument
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server')
	}

	console.log("Connected to MongoDB server");

	// todo collection
	// db.collection('Todos').insertOne({
	// 	text: "Something to do",
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	// insert new doc into users (name, age, location)
	db.collection('Users').insertOne({
		name: 'Nick',
		age: '23',
		location: 'Malaysia'
	}, (err, result) => {
		if (err) {
			console.log('Unable to insert user', err);
		} else {
			console.log(JSON.stringify(result.ops, undefined, 2))
		};
	});

	db.close();
});