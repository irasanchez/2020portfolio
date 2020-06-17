import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"

import boxobeatsScreenshot from "../images/boxobeatsScreenshot.png"

import styled from "styled-components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <AboutMe />
      <Skills />
      {/*  end skills section */}
      <section className="work">
        <h2>🧐 Proof I can build things:</h2>
        <section className="project">
          <div>
            <a href="https://boxobeats.now.sh/">
              <h3>boxobeats</h3>
            </a>
            <img src={boxobeatsScreenshot} />
          </div>
          <div style={{ border: "1px solid red" }}>
            <a
              href="https://documenter.getpostman.com/view/6908215/Szt5fqjV"
              target="_blank"
            >
              Documentation
            </a>
            <p>
              He woke and found her stretched beside him in the dark, curled in
              his capsule in some coffin hotel, his hands clawed into the shadow
              of the console. The Sprawl was a square of faint light. Then a
              mist closed over the black water and the robot gardener. Case had
              never seen him wear the same suit twice, although his wardrobe
              seemed to consist entirely of meticulous reconstruction’s of
              garments of the Villa bespeak a turning in, a denial of the bright
              void beyond the hull.
            </p>
          </div>
        </section>
      </section>
      {/*  end work section */}
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
