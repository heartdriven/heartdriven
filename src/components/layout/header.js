import React, { useState } from 'react'
import { Link } from 'gatsby'
import { FaEnvelope, FaHeartbeat } from "react-icons/fa"
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarMenu, NavbarEnd } from 'bloomer';

const Header = ({active = false}) => {
  const [isActive, setActive] = useState(active)
  return (
  <div>
    <Navbar className="has-shadow is-spaced is-dark">
      <NavbarBrand>
        <NavbarItem>
          <Link to="/">
              <span className="icon is-small">
                <FaHeartbeat />
              </span>
              <span>&nbsp;Heart<strong>Driven</strong></span>
            </Link>
        </NavbarItem>
        <NavbarBurger isActive={ isActive } onClick={() => { setActive(!isActive)}} />
      </NavbarBrand>
      <NavbarMenu isActive={ isActive } onClick={() => { setActive(!isActive)}} >
        <NavbarEnd>
            <Link className="navbar-item" activeClassName="is-active" to="/experience">Experience</Link>
            <Link to="/contact" className="button is-small is-outlined is-light has-margin-left">
              <span className="icon is-small">
                <FaEnvelope />
              </span>
              <span>Contact me</span>
            </Link>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  </div>
)}

export default Header