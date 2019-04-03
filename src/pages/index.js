import React from "react"
import Layout from "../components/layout/layout"

export default () => (
  <Layout>
    <header className="page-title columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h1 className="title">
          Oh, hello there! <span role="img" aria-label="waving hand icon">👋</span>
        </h1>
        <p>
          Maybe you know the feeling &mdash; finding inspiration to build your own website proves to be a difficult experience.  So why not build a tutorial out of it?
        </p>
        <p>
          It may not be the most appealing site there is, but by the end at least you may have learned a thing or two ...
        </p>
        <p>
          A tutorial is on the way on how to create decoupled websites using Drupal, Gatsby and GraphQL.
        </p>
      </div>
    </header>
  </Layout>)
