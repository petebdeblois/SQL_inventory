const supertest = require('supertest');

const app = require('../../app');

const connection = require('../../db');

afterAll(() => connection.destroy());

describe('GET /api/v1/companies', () => {
  it('should respond with an array of companies', async () => {
    const response = await supertest(app)
      .get('/api/v1/companies')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it('should respond with 1 company', async () => {
    const response = await supertest(app)
      .get('api/v1/companies/1')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(response.body.id).toBe(1);
  });

  it('should respond with a 404 for a not found state', async () => {
    await supertest(app)
      .get('/api/v1/companies/999')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
