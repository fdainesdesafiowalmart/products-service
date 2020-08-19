const { Response } = require('jest-express/lib/response')

const { getProduct, getProducts } = require('infrastructure/controllers/products')

jest.mock('application/use_cases/retrieveproduct')
const mockUseCase = require('application/use_cases/retrieveproduct')

describe('Controllers:Products', () => {
  beforeEach(() => mockUseCase.retrieveProduct.mockClear())

  describe('getProduct', () => {
    it('should response with status code 200 when product exists', async () => {
      mockUseCase.retrieveProduct.mockImplementation((id) => {
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
      mockUseCase.retrieveProduct.mockImplementation((id) => {
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
      mockUseCase.retrieveProduct.mockImplementation((id) => {
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
