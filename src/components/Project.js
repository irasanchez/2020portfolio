import React from "react"
import boxobeatsScreenshot from "../images/boxobeatsScreenshot.png"
import styled from "styled-components"
import randomCornerMaker from "../helpers/randomCornerMaker"

const StyledProject = styled.section`
  .links {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      padding: 0.5rem 2rem;
      border: 2px solid teal;
      text-decoration: none;
      font-size: 1.2rem;
    }
  }

  .description {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      min-width: 400px;
      width: 45%;
      flex-grow: 1;
      padding: 1rem;
    }
    img {
      width: 100%;
    }
    p {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .tech-stack {
        width: fit-content;
        margin-top: 15px;
        border-bottom: 2px solid teal;
      }
    }
  }
`
const Project = () => {
  return (
    <StyledProject className="project">
      <section className="front-end">
        <h3>Boxobeats Front-end</h3>
        <section className="links">
          <a
            href="https://boxobeats.now.sh/"
            target="_blank"
            style={{
              borderRadius: `${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}/${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}`,
            }}
          >
            <span aria-role="img">👉</span> APP
          </a>
        </section>
        <section className="description">
          <div>
            <img src={boxobeatsScreenshot} />
          </div>
          <div>
            <p>
              boxobeats is a beatbox training app that enables a user to find
              tutorials for learning how to make individual and combined sounds.
              The user can also add sounds to focus on for their current
              practice session while making use of the built-in metronome.
              <h4 className="tech-stack">
                Tech Stack: React, Axios, Material UI
              </h4>
            </p>
          </div>
        </section>
      </section>
      <section classname="back-end">
        <h3>Boxobeats Back-end</h3>
        <section className="links">
          <a
            href="https://documenter.getpostman.com/view/6908215/Szt5fqjV"
            target="_blank"
            style={{
              borderRadius: `${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}/${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}`,
            }}
          >
            <span aria-role="img">👉</span> DOCS
          </a>
          <section className="description">
            <div>
              <img src="" />
            </div>
            <div>
              <p>
                This is the API built to power the boxobeats front-end. I
                gathered the data, designed the SQL-based database from scratch,
                and deployed it using Heroku.
                <h4 className="tech-stack">
                  Tech Stack: Node, Express, Knex, PostgreSQL
                </h4>
              </p>
            </div>
          </section>
        </section>
      </section>
    </StyledProject>
  )
}

export default Project
