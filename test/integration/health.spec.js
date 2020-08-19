const request = require('supertest')
const app = require('../../src')

describe('Health Endpoint', () => {
  afterEach(async () => await app.close())

  it('should return status code 200', async () => {
    const res = await request(app)
      .get('/health')

    expect(res.statusCode).toEqual(200)
  })
})
