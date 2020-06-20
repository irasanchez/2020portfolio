import React from "react"
import github from "../images/github.svg"
import linkedIn from "../images/linkedin.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 12%;
  display: flex;
  justify-content: space-evenly;
`

const StyledLink = styled.a`
  width: 30%;
  height: 3rem;
  border-radius: 15px 40px 25px 30px;
  border: 2px solid teal;
  /* background: rgba(222, 184, 135, 0.7); */
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
      <StyledLink href="http://github.com/irasanchez">
        <StyledIcon src={github} />
      </StyledLink>
      <StyledLink
        className="social-link"
        href="https://www.linkedin.com/in/ira-sanchez/"
      >
        <StyledIcon src={linkedIn} />
      </StyledLink>
    </StyledDiv>
  )
}

export default SocialLinks
