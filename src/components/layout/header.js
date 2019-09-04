import React, { useState } from "react"
import { Link } from "gatsby"
import { FaHeartbeat } from "react-icons/fa"
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
} from "bloomer"
import SiteNavigation from "./site-navigation"

const Header = ({ active = false }) => {
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
              <span>
                &nbsp;Heart<strong>Driven</strong>
              </span>
            </Link>
          </NavbarItem>
          <NavbarBurger
            isActive={isActive}
            onClick={() => {
              setActive(!isActive)
            }}
          />
        </NavbarBrand>
        <NavbarMenu
          isActive={isActive}
          onClick={() => {
            setActive(!isActive)
          }}
        >
          <NavbarEnd>
            <SiteNavigation></SiteNavigation>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

export default Header
