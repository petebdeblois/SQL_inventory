const supertest = require('supertest');

const app = require('../app');
const project = require('../constants/project');



/* DOCS https://medium.com/verclaire-nine/test-apis-with-supertest-and-jest-be8b5fac3d10
* - describe -> is where we can describe the test suite
* - it -> defines the test and what it should do. In this case, we make an async GET request to the /tea route
* - expect -> is to check whether the test matches certain conditions. 
* In this case, we expect a json with a status code of 200 to be returned from this test.
*/
describe('GET /api/v1', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/api/v1')
      .expect('Content-Type', /json/)
      .expect(200);
    
// DOCS https://jestjs.io/docs/en/expect
    expect(response.body.message).toEqual(project.message);
  });
});
