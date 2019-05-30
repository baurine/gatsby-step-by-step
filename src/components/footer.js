import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            year
          }
        }
      }
    `
  )
  const { title, year } = data.site.siteMetadata
  return (
    <footer>
      <p>
        @{year} {title}
      </p>
    </footer>
  )
}

export default Footer
