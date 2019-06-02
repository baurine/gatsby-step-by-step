const path = require("path")
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // console.log("=========================")
    // console.log(node)
    const parentNode = getNode(node.parent)
    // console.log(parentNode)
    const slug = path.join("/", parentNode.relativeDirectory, parentNode.name)
    // console.log(slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                alias
              }
            }
          }
        }
      }
    `).then(result => {
      // console.log(JSON.stringify(result, null, 2))
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/md-doc.js"),
          context: {
            slug: node.fields.slug
          }
        })
        if (node.frontmatter.alias) {
          createPage({
            path: node.frontmatter.alias,
            component: path.resolve("./src/templates/md-doc.js"),
            context: {
              slug: node.fields.slug
            }
          })
        }
      })
      resolve()
    })
  })
}
