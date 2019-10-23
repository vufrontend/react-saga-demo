import React from 'react'
import NotFound from './not-found'

describe('NotFound', () => {
  it('Renders default', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
  })
})
