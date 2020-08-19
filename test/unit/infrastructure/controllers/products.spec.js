const { Response } = require('jest-express/lib/response')

const { getProduct, getProducts } = require('infrastructure/controllers/products')

describe('Controllers:Products', () => {
  describe('getProduct', () => {
    it('should response with status code 200', async () => {
      const response = new Response()
      const nextMock = jest.fn();

      getProduct({}, response, nextMock);

      expect(response.status).toBeCalledWith(200)
    })

    it('should call next function', async () => {
      const response = new Response()
      const nextMock = jest.fn();

      getProduct({}, response, nextMock);

      expect(nextMock).toBeCalledWith()
    })
  })

  describe('getProducts', () => {
    it('should response with status code 200', async () => {
      const response = new Response()
      const nextMock = jest.fn();

      getProducts({}, response, nextMock);

      expect(response.status).toBeCalledWith(200)
    })

    it('should call next function', async () => {
      const response = new Response()
      const nextMock = jest.fn();

      getProducts({}, response, nextMock);

      expect(nextMock).toBeCalledWith()
    })
  })
})
