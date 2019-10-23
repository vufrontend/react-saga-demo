import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Input from '../../components/input/input'
import ListGif from '../../components/listGif/list-gif'
import { getLoadingWithKey } from '../app/ducks/app-selectors'
import * as types from './ducks/gifs-types'
import { getDashboardData, getFavourite  } from './ducks/gifs-selectors'
import { fetchGifs, toggleFavouriteList } from './ducks/gifs-actions'
// import * as styles from './dashboard.less';

class App extends Component {
  handleSearch = (e) => {
    if(e.keyCode === 13){
      console.log('value', e.target.value);
      const { actions } = this.props
      const { fetchGifs } = actions
      return fetchGifs({ q: e.target.value })
    }
  }
  render() {
    const { isLoading, actions, data, favourite } = this.props
    const { toggleFavouriteList } = actions
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col align-self-center">
            <Input placeHolder="Start searching for images" onKeyDown={this.handleSearch}/>
          </div>
        </div>
        <ListGif
          loading={isLoading}
          handleClick={toggleFavouriteList}
          data={data}
          favourite={favourite}
        />
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  isLoading: getLoadingWithKey(types.GIFS_FETCH)(state),
  data: getDashboardData(state),
  favourite: getFavourite(state)
})

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchGifs,
      toggleFavouriteList,
    },
    dispatch,
  ),
})

App.defaultProps = {
  data: [],
  isLoading: false,
  onChange: undefined,
  getFavourite: {}
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
