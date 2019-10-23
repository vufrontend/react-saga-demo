import { createSelector } from 'reselect'

export const getAppState = state => state.appReducer || {}

export const getLoadingWithKey = key => createSelector(
  getAppState,
  app => (app.loading && app.loading[key]) || false,
)

export const getErrorWithKey = key => createSelector(
  getAppState,
  app => (app.error && app.error[key]) || '',
)
