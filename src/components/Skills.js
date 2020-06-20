import React from "react"
import javascript from "../images/javascript.svg"
import reactIcon from "../images/react.svg"
import redux from "../images/redux.svg"
import reactrouter from "../images/reactrouter.svg"
import html5icon from "../images/html5icon.svg"
import css from "../images/css3.svg"
import python from "../images/python.svg"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;

  h3 {
    margin: auto;
    padding: 0;
    width: 25%;
    text-align: center;
  }
  .skills {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-left: 2rem;
  }
  sub {
    width: 100%;
    text-align: right;
  }
`
const Skill = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 27%;
  margin: 0.5rem 0;

  background-color: teal;
  color: cornsilk;
  border: 1px solid teal;
  border-radius: 1.5rem 2rem 3rem 0.25rem;

  p {
    padding: 0.25rem;
    margin: 0%;
    min-width: fit-content;
    width: 70%;
    text-align: center;
  }
`
const Icon = styled.img`
  width: 30%;
  padding: 0.25rem;
  padding-left: 1rem;
  margin: 0;
`
const Skills = () => {
  return (
    <Section>
      <div>
        <h3>I have experience with these technologies 👉</h3>
        <div className="skills">
          <Skill>
            <Icon src={javascript} />
            <p>JavaScript</p>
          </Skill>
          <Skill>
            <Icon src={reactIcon} />
            <p>React</p>
          </Skill>
          <Skill>
            <Icon src={redux} />
            <p>Redux</p>
          </Skill>

          <Skill>
            <Icon src={python} />
            <p>Python</p>
          </Skill>
          <Skill>
            <Icon src={html5icon} />
            <p>HTML</p>
          </Skill>
          <Skill>
            <Icon src={css} />
            <p>CSS*</p>
          </Skill>
        </div>
      </div>
      <sub>*LESS and SASS included</sub>
    </Section>
  )
}

export default Skills
