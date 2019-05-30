import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>about</h1>
    <p>title: {data.site.siteMetadata.title}</p>
    <pre>{JSON.stringify(data)}</pre>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
