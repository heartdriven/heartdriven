import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const SEO = props => (
  <Helmet title={props.title} titleTemplate="%s · Heart Driven"></Helmet>
)

SEO.propTypes = {
  title: PropTypes.string,
}

SEO.defaultProps = {
  title: "Welcome!",
}

export default SEO
