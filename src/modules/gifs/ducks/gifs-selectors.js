import { createSelector } from 'reselect'

export const getDashboard = state => state.gifsReducers || {}

export const getDashboardData = createSelector(
  getDashboard,
  dashboard => dashboard.data || [],
)

export const getFavourite = createSelector(
  getDashboard,
  dashboard => dashboard.favourite,
)

export const getFavouriteList = createSelector(
  getDashboard,
  dashboard => {
    let result = []
    const { favourite } = dashboard || {}
    Object.keys(dashboard.favourite).forEach(item => {
      if (!!favourite[item]) {
        result.push(item)
      }
    })
    return result
  },
)