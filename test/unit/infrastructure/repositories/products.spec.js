const { findProductById, findProducts } = require('infrastructure/repositories/products')
jest.mock('infrastructure/orm/mongoose/product')
const productMock = require('infrastructure/orm/mongoose/product')

describe('Repositories:Products', () => {
  describe('findProductById', () => {
    it('should return mongoose response', async () => {
      const expectedResponse = {
        foo: 'bar'
      }

      productMock.Product.findOne.mockImplementation(() => expectedResponse)

      const response = await findProductById(1234)

      expect(response).toStrictEqual(expectedResponse)
    })

    it('should return undefined when an error occurred', async () => {
      const expectedResponse = {
        foo: 'bar'
      }

      productMock.Product.findOne.mockImplementation(() => {
        throw new Error('some error')
      })

      const response = await findProductById(1234)

      expect(response).toBe(undefined)
    })
  })

  describe('findProducts', () => {
    it('should return mongoose response', async () => {
      const expectedResponse = [{
        foo: 'bar'
      }]

      productMock.Product.find.mockImplementation(() => expectedResponse)

      const response = await findProducts('foobar')

      expect(response).toStrictEqual(expectedResponse)
    })

    it('should return empty array when an error occurred', async () => {
      const expectedResponse = []

      productMock.Product.find.mockImplementation(() => {
        throw new Error('some error')
      })

      const response = await findProducts('foobar')

      expect(response).toStrictEqual([])
    })

    it('should call mongoose model with expected query', async () => {
      const expectedQuery = {
        $or: [
          { brand: { $regex: 'foobar' } },
          { description: { $regex: 'foobar'} }
        ]
      }

      productMock.Product.find.mockImplementation(() => {
        return []
      })

      const response = await findProducts('foobar')

      expect(productMock.Product.find).toHaveBeenCalledWith(expectedQuery)
    })
  })
})
