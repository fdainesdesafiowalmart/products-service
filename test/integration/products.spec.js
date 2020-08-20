jest.mock('infrastructure/core/dbconnector')
const mongooseMock = require('infrastructure/core/dbconnector')

jest.mock('infrastructure/repositories/products')
const repositoryMock = require('infrastructure/repositories/products')

mongooseMock.connect.mockImplementation(() => {
  return true
})

const request = require('supertest')
const app = require('index')

describe('Products Endpoint', () => {
  afterEach(async () => await app.close())

  describe('GET /products/:id', () => {
    it('should return status code 200 with expected object', async () => {
      const resolvedProduct = {
        id: 9999,
        foo: 'bar'
      }
      repositoryMock.findProductById.mockImplementation(() => resolvedProduct)

      const res = await request(app)
        .get('/products/1234')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toEqual(resolvedProduct)
    })

    it('should return status code 404 with empty body when product does not exist', async () => {
      const resolvedProduct = undefined
      repositoryMock.findProductById.mockImplementation(() => resolvedProduct)

      const res = await request(app)
        .get('/products/1234')

      expect(res.statusCode).toEqual(404)
      expect(res.body).toEqual({ message: "Product does not exist"})
    })

    it('should return status code 404 with empty body when an error occurred', async () => {
      const resolvedProduct = undefined
      repositoryMock.findProductById.mockImplementation(() => {
        throw new Error('detailed message')
      })

      const res = await request(app)
        .get('/products/1234')

      expect(res.statusCode).toEqual(404)
      expect(res.body).toEqual({ message: "Product does not exist"})
    })
  })

  describe('GET /products', () => {
    it('should return status code 200 with empty body', async () => {
      repositoryMock.findProducts.mockImplementation(() => {
        return [{
          id: 9999,
          foo: 'bar'
        }]
      })

      const expectedResponse = {
        total: 1,
        products: [{
          id: 9999,
          foo: 'bar'
        }]
      }

      const res = await request(app)
        .get('/products')

      expect(res.statusCode).toEqual(200)
      expect(res.body).toStrictEqual(expectedResponse)
    })
  })
})
