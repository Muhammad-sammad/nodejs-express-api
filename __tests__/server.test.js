const request = require('supertest');
const app = require('../server');

describe('Calculator API', () => {
  test('adds two numbers', async () => {
    const res = await request(app).get('/add?a=4&b=6');
    expect(res.body.result).toBe(10);
  });

  test('subtracts two numbers', async () => {
    const res = await request(app).get('/subtract?a=8&b=3');
    expect(res.body.result).toBe(5);
  });
});
