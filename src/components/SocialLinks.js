import React from "react"
import github from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 900px) {
    width: 80%;
  }
`

const StyledLink = styled.a`
  width: 30%;
  height: 3rem;
  padding: 0.25rem;
  border-radius: 15px 40px 25px 30px;
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled.img`
  width: 1.5rem;
  padding: 0;
  margin: 0;
`

const SocialLinks = () => {
  return (
    <StyledDiv>
      <StyledLink href="http://github.com/irasanchez" target="_blank">
        <StyledIcon src={github} />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/ira-sanchez/"
        target="_blank"
      >
        <StyledIcon src={linkedIn} />
      </StyledLink>
    </StyledDiv>
  )
}

export default SocialLinks
