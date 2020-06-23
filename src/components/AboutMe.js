import React from "react"

import styled from "styled-components"
import me from "../images/me.svg"
import github from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"
import Skills from "./Skills"

const StyledSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;

  .paragraphs {
    flex-direction: column;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`

const AboutMe = () => {
  return (
    <StyledSection className="about-me">
      <h1>Hi, I'm Ira Sanchez.👋</h1>
      <div className="paragraphs">
        <p>
          I am a full stack software engineer from Earth (Phoenix, AZ, USA).
          <span>🌎</span>
          <br />
          <sub>
            I am willing to relocate. <span>👨🏽‍🚀</span>
            <span>🚀</span>
          </sub>
        </p>
        <p>
          Once, I needed help, and others helped me. Then, I studied social work
          to return my gratitude. <span>Now, I write code to empower.</span>
        </p>
      </div>
    </StyledSection>
  )
}

export default AboutMe
