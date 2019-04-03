import React from 'react';
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Field, Button, Label, FieldLabel, FieldBody, Control, Input, TextArea } from 'bloomer'

export default () => (
  <>
    <Layout>
      <SEO title="Contact me" />
      <header className="page-title columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <h1 className="title">
            Contact
          </h1>
          <p>
            To reach out, fill in the form below.  You can also send me an e-mail or give me a call.
          </p>
        </div>
      </header>
      <div class="column is-three-fifths is-offset-one-fifth">
        <form name="contact" method="POST" data-netlify="true" action="/success">
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>Name</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control>
                  <Input name="name" type="text" placeholder='Your name' />
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>E-mail address</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control>
                  <Input name="email" type="text" placeholder='Your e-mail address' />
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isHorizontal>
            <FieldLabel isNormal>
              <Label>Message</Label>
            </FieldLabel>
            <FieldBody>
              <Field>
                <Control>
                  <TextArea name="message" placeholder='Your message'></TextArea>
                </Control>
              </Field>
            </FieldBody>
          </Field>
          <Field isGrouped>
            <FieldLabel isNormal />
            <FieldBody>
              <Control>
                <Button type="submit" />
              </Control>
            </FieldBody>
          </Field>
        </form>
      </div>
    </Layout>
  </>
);
