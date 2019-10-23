import * as types from './gifs-types'
import { END_POINT } from '../../../api/index'

export const convertParams = (params) => {
  const result = []
  const keys = Object.keys(params)
  keys.forEach((key) => {
    result.push(`${key}=${encodeURIComponent(params[key])}`)
  })
  return result.join('&')
}

const fetchGifs = query => ({
  type: types.GIFS_FETCH,
  meta: {
    request: {
      url: END_POINT.getGifsByQuery.url(convertParams(query)),
      method: 'GET',
    },
  },
})

const fetchGifsByArray = array => ({
  type: types.GIFS_FETCH,
  meta: {
    request: {
      url: END_POINT.getGifsByArray.url(array.join(',')),
      method: 'GET',
    },
  },
})

const cleanGifs = array => ({
  type: types.GIFS_CLEAN,
})

const toggleFavouriteList = id => ({
  type: types.GIF_TOGGLE_FAVOURITE_LIST,
  payload: { id }
})

export {
  fetchGifs,
  toggleFavouriteList,
  fetchGifsByArray,
  cleanGifs,
}