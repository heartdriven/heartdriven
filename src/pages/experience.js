import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Img from "gatsby-image"
import { FaRegCalendar } from "react-icons/fa"

export default ({ data }) => (
  <Layout>
    <SEO title="My experience" />
    <header className="page-title columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h1 className="title">
          Experience
        </h1>
        <p>
          For over ten years I specialized as a freelance consultant.  I've done projects for TUI, Colruyt, the European Commision, AUSY Belgium and many more.
        </p>
      </div>
    </header>
    { data.allNodeProject.edges.map(({ node }) => (
      <article key={node.id} className="project-detail">
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Img fluid={ node.relationships.field_project_image.localFile.childImageSharp.fluid }
                style={{ width: '100%', height: "200px" }}
              />
          </div>
        </div>

        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="columns">
              <div className="column is-two-fifths">
                <h3>{ node.title }</h3>
                <p style={{color: '#aaaaaa'}}>
                  <FaRegCalendar /> { node.field_project_period }
                </p>
                <div>
                </div>
              </div>
              <div className="column is-three-fifths">
                <div dangerouslySetInnerHTML={{ __html: node.body.processed }} />
              </div>
            </div>
          </div>
        </div>
      </article>
    ))}
  </Layout>)

  export const query = graphql`
    {
      allNodeProject(sort:{fields: field_project_order, order: DESC}) {
        edges {
          node {
            id
            title
            body {
              value
              processed
            }
            field_project_period
            relationships {
              field_project_tags {
                name
              }
              field_project_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
