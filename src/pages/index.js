import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Docs</h1>
      {data.allMarkdownRemark.edges.map(({ node }, idx) => (
        <div key={node.fields.slug}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
