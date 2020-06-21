import React from "react"
import Project from "./Project"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`

const Work = () => {
  return (
    <Section className="work" id="work">
      <h2>🧐 Proof I can build things:</h2>
      <Project />
    </Section>
  )
}

export default Work
