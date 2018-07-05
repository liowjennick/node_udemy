// var asyncAdd = (a, b) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			if (typeof a === "number" && typeof b === "number") {
// 				resolve(a + b);
// 			} else {
// 				reject("Arguments must be numbers");
// 			};
// 		}, 1500);
// 	});
// }

// asyncAdd(1, "2").then((result) => {
// 	console.log("Result: " + result);
// 	return asyncAdd(result, 33);
// }).then((result) => {
// 	console.log("2nd Result: " + result);
// }).catch((e) => {
// 	console.log(e);
// });




// function that wraps a promise
var combineString = (string1, string2) => {
	return new Promise((resolve, reject) => {
		if (typeof string1 === "string" && typeof string2 === "string") {
			resolve(string1 + string2);
		} else {
			reject("Your arguments must be strings");
		}
	})
};

combineString(2, "there").then((result) => {
	console.log(result)
}, (e) => {
	console.log(e);
})





// var somePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve('Hey, It worked');
// 		reject('Unable to fulfill promise');
// 	}, 2500);
// });

// somePromise.then((message) => {
// 	console.log("Success: " + message);
// }, (errorMessage) => {
// 	console.log("Error: " + errorMessage);
// });

