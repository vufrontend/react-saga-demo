import CustomError from '../custom-error/custom-error'
import * as errors from '../error-message/message.json'

const getMessageFromCode = (code) => {
  const errorList = errors.default
  if (code && errorList[code]) {
    return errorList[code]
  }
  return errorList.default
}

const makeError = (code, key) => {
  const message = getMessageFromCode(code)
  return new CustomError({
    message,
    key,
    code,
  })
}

const hanldeSuccess = response => ({
  data: response,
})

const handleError = (response) => {
  if (response && response.error) {
    const errorResponse = response.error
    if (Array.isArray(errorResponse)) {
      const result = errorResponse.reduce((prev, cur) => {
        if (cur.code) {
          return prev.concat(makeError(cur.code, cur.key))
        }
        return prev
      }, [])
      return {
        error: result,
      }
    }
    const error = makeError(errorResponse.code, errorResponse.key)
    return {
      error,
    }
  }
  return {
    error: makeError(),
  }
}

export const parseResponse = async (response) => {
  if (response.status === 204) {
    return null
  }
  return response.text().then(text => (text ? JSON.parse(text) : null))
}

/**
 * Call API and then, always return a Promise
 * @param {Object} options: Request object: { URL, Header, method...}
 * @returns {Promise} Promise object represents the response from API
 * If response from API is success, Promise object format will be { data: data-return-from-API }
 * If response from API is error, Promise object format will be { error: CustomError() }
 * If response from API is a bundle of errors, Promise object format will be { error: [ CustomError() ] }
 */
const request = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const updatedResponse = await parseResponse(response)
    if (response.ok) {
      return hanldeSuccess(updatedResponse)
    }
    return handleError(updatedResponse)
  } catch (e) {
    const error = makeError(e.message)
    return {
      error,
    }
  }
}

export default request
