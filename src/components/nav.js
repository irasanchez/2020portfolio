import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  box-shadow: 0px 0.5px 5px 1px rgba(222, 184, 135, 0.7); /*color name is BurlyWood, using rgba for adjusted opacity */
  /* 👇 Make each nav link border unique */
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20%;
  min-width: fit-content;
  margin: 1%;
  height: 3rem;
  color: teal;
  text-decoration: none;
  border: solid 2px teal;
`
const StyledLink1 = styled(StyledLink)`
  height: 3rem;
  width: 3rem;
  border: none;
  border: solid 0.1rem teal;
  border-radius: 83.5% 33.2% 66.9% 47.3%;
  background: teal;
  color: cornsilk;
`
//add custom borders
const StyledLink2 = styled(StyledLink)`
  border-radius: 255px 72px 132px 27px/105px 220px 57px 100px;
`
const StyledLink3 = styled(StyledLink)`
  border-radius: 275px 55px 405px 145px/55px 245px 150px 255px;
`
const StyledLink4 = styled(StyledLink)`
  border-radius: 305px 95px 225px 65px/86px 325px 85px 100px;
`
const StyledLink5 = styled(StyledLink)`
  border-radius: 20px 105px 225px 15px/100px 51px 35px 52px;
`

const Nav = () => (
  <StyledNav>
    <StyledLink1 to="/">IS</StyledLink1>
    <StyledLink2 to="/">Work</StyledLink2>
    <StyledLink3 to="/">Skills</StyledLink3>
    <StyledLink4 to="/">Resume</StyledLink4>
    <StyledLink5 to="/">Resources</StyledLink5>
  </StyledNav>
)

export default Nav
