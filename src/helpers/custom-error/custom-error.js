class CustomError extends Error {
  constructor({
    message,
    key = false,
    code = false,
  }, ...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
    this.message = message
    this.key = key
    this.code = code
  }
}

export default CustomError
