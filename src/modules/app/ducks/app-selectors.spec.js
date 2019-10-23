import {
  getAppState,
  getLoadingWithKey,
  getErrorWithKey,
} from './app-selectors'

describe('App selectors', () => {
  it('getAppState should return {} if state is empty', () => {
    const state = {}
    expect(getAppState(state)).toEqual({})
  })
  it('getLoadingWithKey, getLoadingWithKey should return default', () => {
    const state = {
      loading: undefined,
      error: undefined,
    }
    expect(getLoadingWithKey('TEST')(state)).toBeFalsy()
    expect(getErrorWithKey('TEST')(state)).toEqual('')
  })
  it('getLoadingWithKey should return app property', () => {
    const state = {
      appReducer: {
        loading: {
          TEST: true,
        },
        error: {
          TEST: 'test',
        },
      },
    }
    expect(getLoadingWithKey('TEST')(state)).toBeTruthy()
  })
  it('getErrorWithKey should return app property', () => {
    const state = {
      appReducer: {
        loading: {
          TEST: true,
        },
        error: {
          TEST: 'test',
        },
      },
    }
    expect(getErrorWithKey('TEST')(state)).toEqual('test')
  })
})
