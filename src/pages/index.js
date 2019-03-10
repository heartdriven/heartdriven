import React from "react"
import Layout from "../components/layout/layout"

export default () => (
  <Layout>
    <h2>Hello there! <span role="img" aria-label="waving hand icon">👋</span></h2>
    <p>
      Maybe you know the feeling; building your personal website is a difficult experience.
      I'm building a site to showcase my work, and hope to launch it somewhere this spring!
    </p>
    <p>
      If you want to contact me, see my details below:
    </p>

    <dl>
      <dt>Phone:</dt>
      <dd>+32 (0) 499 21 49 58</dd>
      <dt>E-mail:</dt>
      <dd><a href="mailto:info@heartdriven.com">info@heartdriven.com</a></dd>
      <dt>Address:</dt>
      <dd>Dokter Vannestestraat 4b<br />8510 MARKE</dd>
      <dt>Company:</dt>
      <dd>Heart Driven <sup>bvba</sup><br />BE0838083859</dd>
    </dl>
  </Layout>)
