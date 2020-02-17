import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi, I'm {data.site.siteMetadata.title}. 👋</h1>
      <p>
        I am a web developer from Earth, specifically Arizona, United States. 🌎
      </p>
    </Layout>
  )
}
export default IndexPage
