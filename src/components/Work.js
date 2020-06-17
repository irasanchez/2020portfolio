import React from "react"
import styled from "styled-components"
import boxobeatsScreenshot from "../images/boxobeatsScreenshot.png"

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
`

const Work = () => {
  return (
    <Section className="work" id="work">
      <h2>🧐 Proof I can build things:</h2>
      <section className="project">
        <div>
          <a href="https://boxobeats.now.sh/">
            <h3>boxobeats</h3>
          </a>
          <img src={boxobeatsScreenshot} />
        </div>
        <div>
          <a
            href="https://documenter.getpostman.com/view/6908215/Szt5fqjV"
            target="_blank"
          >
            Documentation
          </a>
          <p>
            boxobeats is a beatbox training app that enables a user to find
            tutorials for learning how to make individual and combined sounds.
            The user can also add sounds to focus on for their current practice
            session while making use of the built-in metronome.
          </p>
        </div>
      </section>
    </Section>
  )
}

export default Work
