# Gatsby Step by Step

## How to run

    npm install -g gatsby-cli
    yarn install

    mkdir -p external-content
    gatsby develop
    gatsby build

If any error happens when runing `gatsby develop` or `gatsby build`, try run `gatsby clean`.

## Steps

### Part I

- step 1 - add more pages: index.js / about.js / cases.js
- step 2 - add Header component
- step 3 - add Footer component
- step 4 - add layout
- step 5 - install gatsby-plugin-sass, normalize.css, config plugins
- step 6 - reset css
- step 7 - style components by css modules

### Part II

- step 8 - demo graphql / query / useStaticQuery
- step 9 - install and config gatsby-source-filesystem plugin
- step 10 - list all local files
- step 11 - install and config gatsby-transformer-remark plugin
- step 12 - display transformed html content from markdown file
- step 13 - generate slug for each markdown file by onCreateNode and createNodeField
- step 14 - create page for each markdown file with empty content by createPages / createPage
- step 15 - fill the doc template page with correct content

### Part III

- step 16 - handle linked local files in the markdown file by gatsby-remark-copy-linked-files
- step 17 - handle linked local images by gatsby-remark-images/gatsby-plugin-sharp
- step 18 - syntax highlight by gatsby-remark-prismjs / prismjs
- step 19 - handle linked local markdown file links by manually implemented plugin
