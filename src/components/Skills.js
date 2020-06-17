import React from "react"
import javascript from "../images/javascript.svg"
import reactIcon from "../images/react.svg"
import redux from "../images/redux.svg"
import reactrouter from "../images/reactrouter.svg"
import html5icon from "../images/html5icon.svg"
import css from "../images/css3.svg"
import python from "../images/python.svg"
import styled from "styled-components"

const Icon = styled.img`
  width: 3rem;
`
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>🌄 I have experience with these technologies:</h2>
      <div>
        <Icon src={javascript} />
        <Icon src={reactIcon} />
        <Icon src={redux} />
        <Icon src={reactrouter} />
        <Icon src={python} />
        <Icon src={html5icon} />
        <Icon src={css} />
      </div>
    </section>
  )
}

export default Skills
