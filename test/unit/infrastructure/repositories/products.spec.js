const { findProductById } = require('infrastructure/repositories/products')
jest.mock('infrastructure/orm/mongoose/product')
const productMock = require('infrastructure/orm/mongoose/product')

describe('Repositories:Products', () => {
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
