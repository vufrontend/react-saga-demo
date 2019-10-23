import getQueryStringParam from './get-query-string-param'

describe('Helpers: getQueryStringParam', () => {
  it('returns correct values', async () => {
    expect(
      getQueryStringParam({
        queryString: 'test=cool&foo=bar&bar=foo',
        name: 'test',
      }),
    ).toBe('cool')

    expect(
      getQueryStringParam({
        queryString: '?test=cool&foo=bar&bar=foo',
        name: 'test',
      }),
    ).toBe('cool')

    expect(
      getQueryStringParam({
        queryString: 'bar=foo&test=cool&foo=bar',
        name: 'test',
      }),
    ).toBe('cool')

    expect(
      getQueryStringParam({
        queryString: 'test=&foo=bar&bar=foo',
        name: 'test',
      }),
    ).toBe('')

    expect(
      getQueryStringParam({
        queryString: 'foo=bar&bar=foo',
        name: 'test',
      }),
    ).toBe(undefined)

    expect(
      getQueryStringParam({
        queryString: 'test=test%2Ftest&bar=foo',
        name: 'test',
        decode: true,
      }),
    ).toBe('test/test')
  })
})
