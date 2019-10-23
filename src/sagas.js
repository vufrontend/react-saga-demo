import { fork } from 'redux-saga/effects'

import { sagas as fetchSagas } from './services/fetch/fetch-saga'
import { sagas as gifsSagas } from './modules/gifs/ducks/gifs-saga'

export function* sagas() {
  yield fork(fetchSagas)
  yield fork(gifsSagas)
}
