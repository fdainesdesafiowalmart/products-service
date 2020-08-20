const { findProductById, findProducts } = require('infrastructure/repositories/products')
jest.mock('infrastructure/orm/mongoose/product')
const productMock = require('infrastructure/orm/mongoose/product')

describe('Repositories:Products', () => {
  describe('findProductById', () => {
    it('should return mongoose response', async () => {
      const expectedResponse = {
        id: 999,
        brand: 'pyu endkewc',
        description: 'nror djnomitn',
        image: 'www.lider.cl/catalogo/images/toysIcon.svg',
        price: 805698
      }
      const returnedFromMongo = {
        _id: 'foobar',
        ...expectedResponse
      }

      productMock.Product.findOne.mockImplementation(() => returnedFromMongo)

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
        id: 999,
        brand: 'pyu endkewc',
        description: 'nror djnomitn',
        image: 'www.lider.cl/catalogo/images/toysIcon.svg',
        price: 805698
      }]
      const returnedFromMongo = [{
        _id: 'foobar',
        id: 999,
        brand: 'pyu endkewc',
        description: 'nror djnomitn',
        image: 'www.lider.cl/catalogo/images/toysIcon.svg',
        price: 805698
      }]

      productMock.Product.find.mockImplementation(() => returnedFromMongo)

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
