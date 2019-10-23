import CustomError from './mm-error'

describe('CustomError', () => {
  it('throws an CustomError object', () => {
    try {
      throw new CustomError({
        message: 'test',
      })
    } catch (error) {
      expect(error.message).toBe('test')
      expect(error.code).toBe(false)
    }
  })
  it('even throws an CustomError object without captureStackTrace', () => {
    Error.captureStackTrace = false
    try {
      throw new CustomError({
        message: 'test',
      })
    } catch (error) {
      expect(error.message).toBe('test')
      expect(error.code).toBe(false)
    }
  })
})
