import React from 'react'
import ImageLoader, { Status } from './image-loader'

describe('ImageLoader', () => {
  let props
  beforeEach(() => {
    props = {
      src: 'src',
      alt: 'this is an image',
    }
  })

  it('Renders default', () => {
    const wrapper = shallow(<ImageLoader {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders with specific width, height', () => {
    const wrapper = shallow(<ImageLoader {...props} width={100} height={100} />)
    wrapper.setState({ status: Status.LOADED })
    expect(wrapper.props().width).toEqual(100)
    expect(wrapper.props().height).toEqual(100)
  })

  it('componentDidMount should call createLoader', () => {
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.setState({ status: Status.LOADING })
    instance.createLoader = jest.fn()
    instance.componentDidMount()
    expect(instance.createLoader).toHaveBeenCalled()
  })

  it('componentDidMount should not call createLoader', () => {
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.setState({ status: Status.LOADED })
    instance.createLoader = jest.fn()
    instance.componentDidMount()
    expect(instance.createLoader).not.toHaveBeenCalled()
  })

  it('createLoader should create an Image instance', () => {
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.destroyLoader = jest.fn()
    instance.createLoader()
    expect(instance.destroyLoader).toHaveBeenCalled()
    expect(instance.img).toBeInstanceOf(Image)
  })

  it('destroyLoader should clean img instance', () => {
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.img = new Image()
    instance.destroyLoader()
    expect(instance.img).toEqual(null)
  })

  it('handleLoad should call onLoad callback', () => {
    const onLoad = jest.fn()
    const wrapper = shallow(<ImageLoader {...props} onLoad={onLoad} />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    const naturalWidth = 100
    const naturalHeight = 100
    instance.handleLoad({
      target: {
        naturalWidth,
        naturalHeight,
      },
    })
    expect(instance.setState).toHaveBeenCalledWith({ status: Status.LOADED, naturalWidth, naturalHeight })
    expect(onLoad).toHaveBeenCalled()
  })

  it('handleLoad should not call onLoad callback', () => {
    const onLoad = jest.fn()
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    const naturalWidth = 100
    const naturalHeight = 100
    instance.handleLoad({
      target: {
        naturalWidth,
        naturalHeight,
      },
    })
    expect(instance.setState).toHaveBeenCalledWith({ status: Status.LOADED, naturalWidth, naturalHeight })
    expect(onLoad).not.toHaveBeenCalled()
  })

  it('handleError should call onError callback', () => {
    const onError = jest.fn()
    const wrapper = shallow(<ImageLoader {...props} onError={onError} />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    instance.handleError('error')
    expect(instance.setState).toHaveBeenCalledWith({ status: Status.FAILED })
    expect(onError).toHaveBeenCalledWith('error')
  })

  it('handleError should not call onError callback', () => {
    const onError = jest.fn()
    const wrapper = shallow(<ImageLoader {...props} />)
    const instance = wrapper.instance()
    instance.setState = jest.fn()
    instance.handleError('error')
    expect(instance.setState).toHaveBeenCalledWith({ status: Status.FAILED })
    expect(onError).not.toHaveBeenCalled()
  })
})
