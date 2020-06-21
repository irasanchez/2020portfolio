import React, { useEffect } from "react"
import javascript from "../images/javascript.svg"
import reactIcon from "../images/react.svg"
import redux from "../images/redux.svg"
import reactrouter from "../images/reactrouter.svg"
import html5icon from "../images/html5icon.svg"
import css from "../images/css3.svg"
import python from "../images/python.svg"
import styled from "styled-components"

const randomCornerMaker = () => {
  //gets random number between 1 and 7 Math.random() * (max - min + 1) + min
  return `${Math.random() * (7 - 1 + 1) + 1}rem`
}

const Section = styled.section`
  display: flex;
  margin-top: 70px;
  flex-wrap: wrap;

  h3 {
    margin: auto;
    padding: 0;
    width: 25%;
    text-align: left;
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

  /* background-color: teal;
  color: cornsilk; */
  border: 2px solid teal;

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
  padding: 0.75rem;
  padding-left: 1rem;
  margin: 0;
`

const skillData = [
  { icon: javascript, p: "JavaScript" },
  { icon: reactIcon, p: "React" },
  { icon: redux, p: "Redux" },
  { icon: python, p: "Python" },
  { icon: html5icon, p: "HTML" },
  { icon: css, p: "CSS*" },
]

const Skills = () => {
  useEffect(() => {
    randomCornerMaker()
  }, [])
  return (
    <Section>
      <div>
        <h3>I have experience with these technologies 👉</h3>
        <div className="skills">
          {skillData.map((skill) => {
            return (
              <Skill
                style={{
                  borderRadius: `${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}/${randomCornerMaker()} ${randomCornerMaker()} ${randomCornerMaker()}
              ${randomCornerMaker()}`, //generates random edges for each skill
                }}
              >
                <Icon src={skill.icon} />
                <p>{skill.p}</p>
              </Skill>
            )
          })}
        </div>
      </div>
      <sub>*LESS and SASS included</sub>
    </Section>
  )
}

export default Skills
