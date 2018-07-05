const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two number', () => {
			var results = utils.add(3, 2);

			expect(results).toBe(5).toBeA("number");
		});
	});

	describe('#asyncAdd', () => {
		it('should async add two numbers', (done) => {
			utils.asyncAdd(4, 3, (sum) => {
				expect(sum).toBe(7).toBeA('number');
				done();
			});
		});
	});

	describe('#square', () => {
		it("should return the squared value of the number", () => {
			var results = utils.square(3);

			expect(results).toBe(9).toBeA("number");
		});
	});

	describe('#asyncSquare', () => {
		it("should async square the value", (done) => {
			utils.asyncSquare(3, (squared) => {
				expect(squared).toBe(9).toBeA("number");
				done();
			});
		});
	});

	describe('#setName', () => {
		it("should verify first and last name are set", () => {
			var user = {
				location: 'Malaysia',
				age: 23
			};

			var results = utils.setName(user, 'Jen Nick');

			expect(results).toInclude({
				firstName: 'Jen',
				lastName: 'Nick'
			});

		});
	});
});



// it("should expect some value", () => {
	// not equal
	// expect(12).toNotBe(11)

	// same object
	// expect({
	// 	name: "Nick"
	// }).toEqual({
	// 	name: "Nick"
	// });

	// for array and object
	// expect([1, 2, 3, 4]).toExclude([1])

	// expect({
	// 	name: 'Nick',
	// 	age: 25,
	// 	location: "Malaysia"
	// }).toInclude({
	// 	age: 25
	// })



