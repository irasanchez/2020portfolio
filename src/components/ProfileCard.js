import React from "react"

import styled from "styled-components"

import Skills from "./Skills"
import AboutMe from "./AboutMe"
import Social from "./Social"

const StyledSection = styled.section`
  margin-top: 25px;
  height: calc(100vh - 50px);
  div {
    display: flex;
  }
  /* 
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%; */

  sub {
    line-height: 1;
    float: right;
  }
`

const ProfileCard = () => {
  return (
    <StyledSection>
      <div>
        <Social />
        <AboutMe />
      </div>
      <Skills />
    </StyledSection>
  )
}

export default ProfileCard
