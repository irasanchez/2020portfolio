import React, { useEffect } from "react"
import javascript from "../images/javascript.svg"
import reactIcon from "../images/react.svg"
import redux from "../images/redux.svg"
import reactrouter from "../images/reactrouter.svg"
import html5icon from "../images/html5icon.svg"
import css from "../images/css3.svg"
import python from "../images/python.svg"
import styled from "styled-components"
import randomCornerMaker from "../helpers/randomCornerMaker"

const Section = styled.section`
  margin-top: 70px;

  sub {
    width: 100%;
    text-align: right;
  }

  @media (max-width: 900px) {
    /* puts the title over the skills */
    flex-direction: column;
  }
`

const EverythingButSub = styled.div`
  /* makes more sense when you see jsx, but the items need to be grouped together so that the sub is on bottom. */
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    /* stacks the individual skills */
    width: 80%;
    margin: 0 auto;
  }
`

const H3 = styled.h3`
  margin: auto;
  padding: 0;
  width: 25%;
  text-align: left;
  min-width: 200px;

  display: flex;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 90%;
  padding-left: 2rem;

  @media (max-width: 900px) {
    margin: 0;
    padding: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`

const Skill = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;

  width: 25%;
  min-width: 190px;
  margin: 0.5rem;
  border: 2px solid teal;

  p {
    padding: 0.25rem;
    margin: 0%;
    min-width: fit-content;
    width: 65%;
    text-align: center;
  }
  @media (max-width: 900px) {
    margin: 10px 1%;
    width: 45%;
    min-width: 190px;
  }
`
const Icon = styled.img`
  width: 3.5rem;
  padding: 0.75rem;
  padding-left: 1rem;
  margin: 0;

  @media (max-width: 900px) {
    padding: 0.25rem;
    width: 20%;
  }
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
  return (
    <Section>
      <EverythingButSub>
        <H3>
          I have experience with these technologies
          <span aria-role="img"> 🔨</span>
        </H3>
        <SkillsContainer>
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
        </SkillsContainer>
      </EverythingButSub>
      <sub>*LESS and SASS included</sub>
    </Section>
  )
}

export default Skills
