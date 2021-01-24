const supertest = require('supertest');

const app = require('../../app');

const connection = require('../../db');

afterAll(() => connection.destroy());

describe('GET /api/v1/addresses', () => {
  it('should respond with an array of addresses', async () => {
    const response = await supertest(app)
      .get('/api/v1/addresses')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });
  it('should respond with 1 address', async () => {
    const response = await supertest(app)
      .get('/api/v1/addresses/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBe(1);
  });
  
  it('should respond with a 404', async () => {
    const response = await supertest(app)
      .get('/api/v1/addresses/1999999')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
