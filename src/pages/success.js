import React from 'react';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Field, Button, Label, FieldLabel, FieldBody, Control, Input, TextArea } from 'bloomer'

export default () => (
  <>
    <Layout>
      <SEO title="Thank you!" />
      <header className="page-title columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h1 className="title">
            Thank you for your request!
          </h1>
          <p>
            We have succesfully received your request and are going to respond as soon as possible.
          </p>
        </div>
      </header>
    </Layout>
  </>
);
