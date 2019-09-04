import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        allMenuLinkContentMenuLinkContent(
          sort: { fields: weight, order: ASC }
          filter: {
            menu_name: { eq: "site-navigation" }
            drupal_parent_menu_item: { eq: null }
            enabled: { eq: true }
          }
        ) {
          edges {
            node {
              id
              drupal_parent_menu_item
              title
              link {
                uri
                title
              }
            }
          }
        }
      }
    `}
    render={data => {
      let output
      for (let item of data.allMenuLinkContentMenuLinkContent.edges) {
        if (item.node.drupal_parent_menu_item === null) {
          output = [
            output,
            <Link
              key={item.node.id}
              className="navbar-item"
              activeClassName="is-active"
              to={item.node.link.uri.split("internal:").pop()}
            >
              {item.node.title}
            </Link>,
          ]
        }
      }
      return <>{output}</>
    }}
  />
)
