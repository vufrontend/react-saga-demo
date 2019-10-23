import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ListGif from '../../components/listGif/list-gif'
import { getLoadingWithKey } from '../app/ducks/app-selectors'
import * as types from './ducks/gifs-types'
import { getDashboardData, getFavouriteList, getFavourite  } from './ducks/gifs-selectors'
import { fetchGifsByArray } from './ducks/gifs-actions'

class Favourite extends Component {
  render() {
    const { isLoading, actions, data, favourite } = this.props
    return (
      <div>
        <ListGif
          loading={isLoading}
          data={data}
          favourite={favourite}
          emptyMessage='Your favourite list is empty'
        />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  isLoading: getLoadingWithKey(types.GIFS_FETCH)(state),
  data: getDashboardData(state),
  favourite: getFavourite(state),
  favouriteList: getFavouriteList(state),
})

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchGifsByArray,
    },
    dispatch,
  ),
})

Favourite.defaultProps = {
  data: [],
  isLoading: false,
  onChange: undefined,
  favouriteList: {}
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourite)
