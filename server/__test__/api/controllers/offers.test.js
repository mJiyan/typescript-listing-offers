const should = require('should'),
    request = require('supertest'),
    app = require('../../../src/app');




describe('GET /offers', () => {
    test('It should responds with JSON Array', () => {
        return request(app)
            .get('/offers')
            .then((res) => {
                expect(res.statusCode).toBe(200);
                expect(res.type).toBe('application/json');
            });
    });
});

