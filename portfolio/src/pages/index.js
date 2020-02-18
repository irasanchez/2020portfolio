import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import me from "../images/me.svg"

import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
      <div className="id-card">
        <img src={me} />
        <div>
          <h1>Hi, I'm {data.site.siteMetadata.title}. 👋</h1>
          <p>
            I am a web developer from Earth, specifically Arizona, United
            States. 🌎
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
