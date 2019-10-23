export const initialState = {
  loading: undefined,
  error: undefined,
}
const updateLoading = (state, actionName, isLoading = true, error = '') => {
  const newError = {
    ...state.error,
    [actionName]: error,
  }
  const newLoading = {
    ...state.loading,
    [actionName]: isLoading,
  }
  return {
    ...state,
    loading: newLoading,
    error: newError,
  }
}
export default function appReducer(state = initialState, action) {
  const { type, meta, payload } = action
  if (meta && meta.request) {
    return updateLoading(state, type)
  }
  const matches = /(.*)_(SUCCESS|FAILURE)/.exec(type)
  if (!matches) return state
  const [, actionName, actionState] = matches
  if (actionState === 'FAILURE') {
    return updateLoading(state, actionName, false, payload.message)
  }
  return updateLoading(state, actionName, false)
}
