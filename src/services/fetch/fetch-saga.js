import { call, put, takeEvery } from 'redux-saga/effects'

import { makeRequest } from '../../helpers/make-api-call/make-api-call'

export const fetchError = (type, { error }) => ({
  type: `${type}_FAILURE`,
  payload: {
    ...error,
  },
  meta: {
    disconnect: error.code === 'expired-token' || error.code === 'invalid-token' || error.code === 'invalid-authentication',
  },
})

export const fetchSuccess = (type, response) => ({
  type: `${type}_SUCCESS`,
  payload: {
    ...response.data,
  },
})

export function* executeFetchSaga({ type, meta: { request } }) {
  try {
    const res = yield call(makeRequest, request)
    if (res.error) {
      yield put(fetchError(type, res))
    } else {
      yield put(fetchSuccess(type, res))
    }
  } catch (error) {
    yield put(fetchError(type, error))
  }
}

// eslint-disable-next-line func-names
export const sagas = function* () {
  yield takeEvery(action => !!action.meta && action.meta.request, executeFetchSaga)
}
