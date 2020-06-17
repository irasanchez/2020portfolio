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
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
`
const Skill = styled.div`
  background-color: teal;
  color: cornsilk;
  width: 20%;
  height: 3.5rem;
  margin: 0 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid teal;
  border-radius: 4.5rem 6.5rem 5.5rem 7.5rem;
  margin: 1rem;
  p {
    margin: 0%;
  }
`
const Icon = styled.img`
  width: 2rem;
  margin: 0;
`
const Skills = () => {
  return (
    <Section className="skills" id="skills">
      <h2>🌄 I have experience with these technologies:</h2>
      <div>
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
          <Icon src={reactrouter} />
          <p>React Router</p>
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
      <p>*LESS and SASS included</p>
    </Section>
  )
}

export default Skills
