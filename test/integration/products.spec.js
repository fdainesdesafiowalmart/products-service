const request = require('supertest')
const app = require('index')

describe('Products Endpoint', () => {
  afterEach(async () => await app.close())

  it('should return status code 200 with empty body', async () => {
    const res = await request(app)
      .get('/products')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({})
  })

  it('should return status code 200 with empty body', async () => {
    const res = await request(app)
      .get('/products/1234')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({})
  })
})
