import React from "react"

import styled from "styled-components"
import me from "../images/me.svg"
import github from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"

const AboutMe = () => {
  return (
    <div className="id-card">
      <div className="img-bg">
        <img className="portrait" src={me} />
        <div className="social-links">
          <a className="social-link" href="http://github.com/irasanchez">
            <img className="icon" src={github} />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/ira-sanchez/"
          >
            <img className="icon" src={linkedIn} />
          </a>
        </div>
      </div>

      <div className="about-me">
        <h1>Hi, I'm Ira Sanchez.👋</h1>
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
            While I complete my studies, I am using my skills as a Team Lead at
            Lambda School where I oversee a group of students and supplement
            their learning with tutoring and coaching.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
