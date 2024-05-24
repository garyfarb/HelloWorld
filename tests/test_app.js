const request = require('supertest');
const assert = require('assert');
const app = require('../src/app');  // Import the app object

describe('GET /hello/:world', () => {
    it('should return a JSON message with "Hello world"', (done) => {
        const world = 'world';
        request(app)
            .get(`/hello/${world}`)
            .end((err, res) => {
                assert.strictEqual(res.status, 200);  // Check the response status
                assert.strictEqual(res.body.message, `Hello ${world}`);  // Check the response body
                done();  // Indicate that the test is complete
            });
    });

    it('should return a JSON message with "Hello Node"', (done) => {
        const world = 'Node';
        request(app)
            .get(`/hello/${world}`)
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.message, `Hello ${world}`);
                done();
            });
    });
});
