jest.mock('infrastructure/core/dbconnector')
const mongooseMock = require('infrastructure/core/dbconnector')

mongooseMock.connect.mockImplementation(() => {
  return true
})

const request = require('supertest')
const app = require('index')

describe('Health Endpoint', () => {
  const servicePrefix = '/products-service/v1'

  afterEach(async () => await app.close())

  it('should return status code 200 with empty body', async () => {
    const res = await request(app)
      .get(servicePrefix + '/health')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({})
  })
})
