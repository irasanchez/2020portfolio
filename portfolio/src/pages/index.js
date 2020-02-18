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
        <div className="img-bg">
          <img src={me} />
        </div>

        <div className="about-me">
          <h1>Hi, I'm {data.site.siteMetadata.title}. 👋</h1>
          <p>
            I am a full stack software engineer using HTML, CSS, JavaScript
            (often React.js) to solve problems. 🦸‍♂️
          </p>
          <p>
            While I complete my studies, I use my skills as a Team Lead at
            Lambda School where I oversee a group of students and supplement
            their learning with tutoring and accountability.
          </p>
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
