const { Response } = require('jest-express/lib/response')

const { getProduct, getProducts } = require('infrastructure/controllers/products')

jest.mock('application/use_cases/retrieveproduct')
const mockRetrieveProductUseCase = require('application/use_cases/retrieveproduct')

jest.mock('application/use_cases/retrieveproducts')
const mockRetrieveProductsUseCase = require('application/use_cases/retrieveproducts')

describe('Controllers:Products', () => {
  describe('getProduct', () => {
    beforeEach(() => mockRetrieveProductUseCase.retrieveProduct.mockClear())

    it('should response with status code 200 when product exists', async () => {
      mockRetrieveProductUseCase.retrieveProduct.mockImplementation((id) => {
        return { foo: 'bar' }
      })

      const request = {
        params: {
          id: 12345
        }
      }
      const response = new Response()
      const nextMock = jest.fn();

      await getProduct(request, response, nextMock);

      expect(response.status).toBeCalledWith(200)
      expect(response.json).toBeCalledWith({ foo: 'bar' })
    })

    it('should response with status code 400 when product does not exist', async () => {
      mockRetrieveProductUseCase.retrieveProduct.mockImplementation((id) => {
        return undefined
      })

      const request = {
        params: {
          id: 12345
        }
      }
      const response = new Response()
      const nextMock = jest.fn();

      await getProduct(request, response, nextMock);

      expect(response.status).toBeCalledWith(404)
      expect(response.json).toBeCalledWith({ message: 'Product does not exist' })
    })

    it('should call next function', async () => {
      mockRetrieveProductUseCase.retrieveProduct.mockImplementation((id) => {
        return { foo: 'bar' }
      })

      const request = {
        params: {
          id: 12345
        }
      }
      const response = new Response()
      const nextMock = jest.fn();

      await getProduct(request, response, nextMock);

      expect(nextMock).toBeCalledWith()
    })
  })

  describe('getProducts', () => {
    beforeEach(() => mockRetrieveProductsUseCase.retrieveProducts.mockClear())

    it('should response with status code 200', async () => {
      mockRetrieveProductsUseCase.retrieveProducts.mockImplementation(() => {
        return [{ foo: 'bar' }]
      })

      const request = {
        query: {
          pattern: 'foobar'
        }
      }
      const response = new Response()
      const nextMock = jest.fn();

      await getProducts(request, response, nextMock);

      expect(response.status).toBeCalledWith(200)
    })

    it('should call next function', async () => {
      mockRetrieveProductsUseCase.retrieveProducts.mockImplementation(() => {
        return [{ foo: 'bar' }]
      })

      const request = {
        query: {
          pattern: 'foobar'
        }
      }
      const response = new Response()
      const nextMock = jest.fn();

      await getProducts(request, response, nextMock);

      expect(nextMock).toBeCalledWith()
    })
  })
})
