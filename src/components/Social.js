import React from "react"
import me from "../images/me.svg"
import styled from "styled-components"
import SocialLinks from "./SocialLinks"

const StyledSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const ImgBg = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 40% 50%;
  background: #b75d0e;
`

const Social = () => {
  return (
    <StyledSection>
      <ImgBg>
        <img src={me} />
      </ImgBg>
    </StyledSection>
  )
}

export default Social
