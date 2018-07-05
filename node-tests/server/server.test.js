const request = require('supertest');
const expect = require('expect');
let app = require('./server').app;

describe('server', () => {
	describe('GET /', () => {
		it("should return hello world response", (done) => {
			request(app)
				.get('/')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found'
					});
				})
				.end(done);
		});
	});

	describe('GET /users', () => {
		it("should return the list of users", (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: "Nick",
						age: 23
					});
				})
				.end(done);
		})
	})
})

