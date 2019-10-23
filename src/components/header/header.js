/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Gallereasy</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
            className="nav-link"
            activeStyle={{
              fontWeight: "bold",
            }}
            exact
            to="/">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={{
                fontWeight: "bold",
              }}
              exact
              to="/favourite">
                Favourite
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {

}

export default Header

