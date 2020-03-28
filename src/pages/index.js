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
      {/*  end about me section */}
      <section className="work">
        <h2>Proof I can build things:</h2>
        <section className="project">
          <h3>box-o-beats</h3>
        </section>
      </section>
      <section className="resources">
        <h2>Things I've made to help others:</h2>
        <section className="resource">
          <h3>
            <a
              target="_blank"
              href="https://www.notion.so/irasanchez/Communication-Tips-for-Lambda-Students-3b78b0c2329c43d6bffacc651a4e68c4"
            >
              Communication Tips for Lambda Students
            </a>
          </h3>
          <p>
            A document I made for other Lambda School students who struggle with
            soft skills, particularly communication for networking and
            professional environments, includes information for remote
            communication skills as well.
          </p>
        </section>
        <section>
          <h3>
            <a
              target="_blank"
              href="https://codesandbox.io/s/drillpropsdrill-owywe"
            >
              DrillPropsDrill
            </a>
          </h3>
          <p>
            I made this drill for the first group of students I tutored at
            Lambda School to help them practice writing passing props in React,
            a tool used to dynamically render data across different parts of the
            app.
          </p>
        </section>
      </section>
    </Layout>
  )
}
export default IndexPage
