import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Icon } from 'antd'

export const Status = {
  LOADING: 'loading',
  LOADED: 'loaded',
  FAILED: 'failed',
}

class ImageLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: Status.LOADING,
      naturalWidth: 0,
      naturalHeight: 0,
    }
  }

  componentDidMount() {
    const { status } = this.state
    if (status === Status.LOADING) {
      this.createLoader()
    }
  }

  createLoader = () => {
    const { src } = this.props
    this.destroyLoader()
    this.img = new Image()
    this.img.onload = this.handleLoad
    this.img.onerror = this.handleError
    this.img.src = src
  }

  destroyLoader = () => {
    if (this.img) {
      this.img.src = ''
      this.img.onload = null
      this.img.onerror = null
      this.img = null
    }
  }

  handleLoad = (event) => {
    const { onLoad } = this.props
    const { naturalWidth, naturalHeight } = event.target
    this.destroyLoader()
    this.setState({ status: Status.LOADED, naturalWidth, naturalHeight })
    if (onLoad) onLoad(event)
  }

  handleError = (error) => {
    const { onError } = this.props
    this.destroyLoader()
    this.setState({ status: Status.FAILED })
    if (onError) onError(error)
  }

  render() {
    const {
      className, src, alt, width, height,
    } = this.props
    const { status, naturalWidth, naturalHeight } = this.state
    switch (status) {
      case Status.LOADING:
        return <Spin className={className} indicator={<Icon type="loading" spin />} />
      default:
        return <img className={className} src={src} alt={alt} width={width !== 0 ? width : naturalWidth} height={height !== 0 ? height : naturalHeight} />
    }
  }
}

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
}

ImageLoader.defaultProps = {
  className: '',
  width: 0,
  height: 0,
  onLoad: null,
  onError: null,
}

export default ImageLoader
