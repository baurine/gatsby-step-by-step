import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1>Docs</h1>
      {data.allFile.edges.map(({ node }) => (
        <div key={node.relativePath}>
          <div>name: {node.name}</div>
          <div>size: {node.prettySize}</div>
          <div>path: {node.relativePath}</div>
        </div>
      ))}
      {data.allMarkdownRemark.edges.map(({ node }, idx) => (
        <div key={node.fields.slug}>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          ext
          name
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          html
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
