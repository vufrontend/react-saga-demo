import request from './request'

export const makeDefaultHeader = () => {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json; charset=UTF-8')
  return headers
}

export const makeRequestParams = (method, body, headers) => {
  const requestHeaders = headers || makeDefaultHeader()
  const params = {
    headers: requestHeaders,
    method: method || 'GET',
    body: requestHeaders.get('Content-Type') === 'application/json; charset=UTF-8' ? JSON.stringify(body) : body,
  }
  return params
}

export const makeRequest = async ({
  method, url, headers, body,
}) => {
  const requestParams = makeRequestParams(method, body, headers)
  const response = await request(url, requestParams)
  return response
}
