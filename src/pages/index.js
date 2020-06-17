import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Work from "../components/Work"

import styled from "styled-components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <AboutMe />
      <div id="competencies">
        <Skills />
        <Work />
      </div>

      <section className="resources">
        <h2>🤝 Things I've made to help others:</h2>
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
