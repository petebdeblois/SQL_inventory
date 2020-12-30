const supertest = require('supertest');

const app = require('./app');
const project = require('./constants/project');

// https://jestjs.io/docs/en/asynchronous
describe('GET /', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      // This expectations are builtin supertest
      .expect('Content-Type', /json/)
      .expect(200);
// this expectations is form JEST
    expect(response.body.message).toEqual(project.message);
  });
});
