import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div>
    <Header></Header>
    <div class="container">
      <main class="content">
        { children }
      </main>
    </div>
    <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout