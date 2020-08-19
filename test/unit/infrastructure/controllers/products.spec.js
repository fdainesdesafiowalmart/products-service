const { Response } = require('jest-express/lib/response')

const { productsController } = require('infrastructure/controllers/products')

describe('Controllers:Products', () => {
  it('should response with status code 200', async () => {
    const response = new Response()
    const nextMock = jest.fn();

    productsController({}, response, nextMock);

    expect(response.status).toBeCalledWith(200)
  })

  it('should call next function', async () => {
    const response = new Response()
    const nextMock = jest.fn();

    productsController({}, response, nextMock);

    expect(nextMock).toBeCalledWith()
  })
})
