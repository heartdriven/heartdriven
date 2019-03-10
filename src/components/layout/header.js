import React from 'react'
import { Link } from 'gatsby'
import { FaEnvelope, FaHeartbeat } from "react-icons/fa"

const Header = () => (
  <nav id="navbar" class="navbar has-shadow is-spaced is-dark">
      <div class="navbar-brand">
        <Link to="/" className="navbar-item">
          <span class="icon is-small">
            <FaHeartbeat />
          </span>
          <span>&nbsp;Heart<strong>Driven</strong></span>

        </Link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <Link className="navbar-item is-active" to="/">Self</Link>
          <Link className="navbar-item" to="/experience">Experience</Link>
          <Link to="/" className="button is-small is-outlined is-light">
            <span class="icon is-small">
              <FaEnvelope />
            </span>
            <span>Contact me</span>
          </Link>
        </div>
      </div>
  </nav>
)

export default Header