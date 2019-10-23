import appReducer, {
  initialState,
} from './app-reducers'

describe('app-reducers', () => {
  it('returns initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState)
  })

  it('should update state if action call API', () => {
    expect(appReducer(undefined, {
      type: 'TEST',
      meta: {
        request: 'test',
      },
    })).toEqual({
      loading: {
        TEST: true,
      },
      error: {
        TEST: '',
      },
    })
  })
  it('should update state if action call API success', () => {
    expect(appReducer(undefined, {
      type: 'TEST_SUCCESS',
    })).toEqual({
      loading: {
        TEST: false,
      },
      error: {
        TEST: '',
      },
    })
  })
  it('should update state if action call API failure', () => {
    expect(appReducer(undefined, {
      type: 'TEST_FAILURE',
      payload: {
        message: 'test',
      },
    })).toEqual({
      loading: {
        TEST: false,
      },
      error: {
        TEST: 'test',
      },
    })
  })
})
