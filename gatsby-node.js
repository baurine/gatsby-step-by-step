const path = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    console.log("=========================")
    console.log(node)
    const parentNode = getNode(node.parent)
    console.log(parentNode)
    const slug = path.join('/', parentNode.relativeDirectory, parentNode.name)
    console.log(slug)
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
