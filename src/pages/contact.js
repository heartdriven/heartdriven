import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default () => (
  <>
    <Layout>
      <SEO title="Contact me" />
      <header className="page-title columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h1 className="title">Contact</h1>
          <p>
            If you want to reach me, e-mail me at{" "}
            <a href="mailto:info@heartdriven.com">info@heartdriven.com</a> or
            <br />
            call me +32 (0) 499 21 49 58.
          </p>
        </div>
      </header>
    </Layout>
  </>
)
