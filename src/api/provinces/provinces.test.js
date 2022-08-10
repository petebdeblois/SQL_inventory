const supertest = require('supertest');

const app = require('../../app');

const connection = require('../../db');

afterAll(() => connection.destroy());

describe('GET /api/v1/provinces', () => {
  it('should respond with an array of provinces', async () => {
    const response = await supertest(app)
      .get('/api/v1/provinces')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should respond with an individual province', async () => {
    const response = await supertest(app)
      .get('/api/v1/provinces/1')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.id).toBe(1);
  });

  it('should respond with a 404 for a not found province', async () => {
    await supertest(app)
      .get('/api/v1/provinces/4200')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
