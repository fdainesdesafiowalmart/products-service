const request = require('supertest')
const app = require('../../src')

describe('Sample Test', () => {
  afterEach(async () => await app.close())

  it('should test that true === true', async () => {
    const res = await request(app)
      .get('/health')

    expect(res.statusCode).toEqual(200)
  })
})
