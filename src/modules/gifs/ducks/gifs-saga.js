import {
  takeLatest, call, select, put
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'connected-react-router'
import * as types from './gifs-types'
import { getFavouriteList } from './gifs-selectors'
import { fetchGifsByArray, cleanGifs } from './gifs-actions'

export const routerSelector = state => state.router

export const isFavouritePage = action => action.type === LOCATION_CHANGE && action.payload.location.pathname === '/favourite'

export const isDashboardPage = action => action.type === LOCATION_CHANGE && action.payload.location.pathname === '/'

export function* handleLoadingFavouriteGifs() {
  yield put(cleanGifs())
  const favouriteList = yield select(getFavouriteList)
  if(favouriteList && favouriteList.length > 0) {
    yield put(fetchGifsByArray(favouriteList))
  }
}

export function* handleCleanGifs() {
  yield put(cleanGifs())
}

// eslint-disable-next-line func-names
export const sagas = function* () {
  yield takeLatest(isFavouritePage, handleLoadingFavouriteGifs)
  yield takeLatest(isDashboardPage, handleCleanGifs)
}
