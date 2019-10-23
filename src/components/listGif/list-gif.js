import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GifCard from './gif-card'
import Spinner from '../spinner/spinner'

import './list-gif.scss'

class ListGif extends Component {
    render() {
        const {data, loading, handleClick, favourite, emptyMessage} = this.props
        if(loading){
            return <Spinner />
        }
        if(!data || data.length  < 1){
            return (
                <div className="list-gif-empty">
                    { emptyMessage }
                </div>
            )
        }
        return (
            <div className="row">
                {data.map(gif => 
                    <GifCard data={gif} key={gif.id} handleClick={handleClick} isFavourited={!!favourite[gif.id]}/>
                )}
            </div>
        )
    }
}

ListGif.propTypes = {
    loading: PropTypes.bool.isRequired,
    handleClick: PropTypes.func,
    data: PropTypes.array.isRequired,
    emptyMessage: PropTypes.string,
}

ListGif.defaultProps = {
    emptyMessage: '',
    data: [],
    loading: false,
    handleClick: undefined,
    favourite: {},
}
export default ListGif