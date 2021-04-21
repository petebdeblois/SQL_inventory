const supertest = require('supertest');

const app = require('../../app');

const connection = require('../../db');

afterAll(() => connection.destroy());

describe('GET /api/v1/users', () => {
  it('should respond with an array of users', async () => {
    const response = await supertest(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it('should respond with 1 user', async () => {
    const response = await supertest(app)
      .get('/api/v1/users/1')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.id).toBe(1);
  });
  it('should respond with 404', async () => {
    await supertest(app)
      .get('/api/v1/users/999')
      .expect('Content-Type', /json/)
      .expect(404);
  });

});
