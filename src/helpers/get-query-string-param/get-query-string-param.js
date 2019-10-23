export default ({ queryString, name, decode = false }) => {
  // https://regex101.com/r/QNL8AS/1
  const regex = new RegExp(`[?&]?${name}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(queryString) || {}

  return decode ? results[2] && decodeURIComponent(results[2]) : results[2]
}
