import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import heart from '../../assets/images/heart.png'
import './gif-card.scss'


const propTypes = {
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func
}

class GifCard extends Component {
    handleClick = (id) =>{
        const { handleClick } = this.props
        if(handleClick && id){
            handleClick(id)
        }
    }
    renderGif = (data, isFavourited) => {
        const { images, id } = data
        console.log(images)
        return (
            <div className="image-block" onClick={() => this.handleClick(id)}>
                {!!images.fixed_height && <img src={images.fixed_height.url} alt='trending gif'/>}
               { isFavourited?  <img className="icon" src={heart} alt="Heart"/>: null}
            </div>
        )
    }
    renderUserInfo = (data) => {
        if(!data){
            return (
                <div className="user-info-block emty">User profile is empty!</div>
            )
        }
        return (
            <div className="user-info-block">
                <div className="user-icon">{<img src={data.avatar_url} alt='gif-trending'/>}</div>
                <p className="user-name">{data.username}</p>
            </div>
        )
    }
    render() {
        const { data, isFavourited }  = this.props
        if(!data){
            return null
        }
        const { images, id } = data
        return (
            <div className="gif-block-wrapper col-lg-3 col-md-4 col-6">
                <div className="gif-block" >
                    <div className={classNames('image-block', { 'liked': isFavourited })} onClick={() => this.handleClick(id)}>
                        {!!images.fixed_height && <img src={images.fixed_height.url} alt='trending gif'/>}
                        <img className="icon" src={heart} alt="Heart"/>
                    </div>
                </div>
            </div>
        )
    }
}

GifCard.propTypes = propTypes

export default GifCard