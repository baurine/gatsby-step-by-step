import React from "react"
import { graphql } from "gatsby"
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
  }
`
