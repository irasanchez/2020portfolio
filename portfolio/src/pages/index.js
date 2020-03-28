import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import me from "../images/me.svg"

import styled from "styled-components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="id-card">
        <div className="img-bg">
          <img src={me} />
        </div>

        <div className="about-me">
          <h1>Hi, I'm Ira.👋</h1>
          <div className="paragraphs">
            <p>
              I am a full stack software engineer from Earth (Phoenix, AZ, USA).
              <span>🌎</span>
              <br />
              <sub>
                I am willing to relocate. <span>👨🏽‍🚀</span> <span>🚀</span>
              </sub>
            </p>
            <p>
              While I complete my studies, I am using my skills as a Team Lead
              at Lambda School where I oversee a group of students and
              supplement their learning with tutoring and coaching.
            </p>
          </div>

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
