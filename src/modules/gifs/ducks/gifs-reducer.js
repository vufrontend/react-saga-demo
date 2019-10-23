import * as types from './gifs-types'

export const initialState = {
  data: [],
  favourite: {}
}

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case types.GIFS_FETCH:
      return {
        ...state,
        data: [],
      }
    case types.GIFS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      }
    case types.GIFS_FETCH_FAILURE:
      return {
        ...state,
        data: [],
      }
    case types.GIF_TOGGLE_FAVOURITE_LIST:
      const status = !!state.favourite[action.payload.id]
        return {
          ...state,
          favourite: {...state.favourite, [action.payload.id]: !status },
        }
    case types.GIFS_CLEAN:
        return {
          ...state,
          data: [],
        }
    default:
      return state
  }
}
