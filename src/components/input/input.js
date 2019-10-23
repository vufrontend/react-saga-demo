import React from 'react'
import PropTypes from 'prop-types'
import './input.scss'

const Input = ({ placeHolder, type, onKeyDown }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      onKeyDown={onKeyDown}
      className="custom-input"
    />
  )
}

Input.propTypes = {
  placeHolder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password']),
  onKeyDown: PropTypes.func,
}

Input.defaultProps = {
  placeHolder:'',
  type: 'text',
  onKeyDown: undefined,
}

export default Input
