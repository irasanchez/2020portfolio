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
  & ${StyledNav}:nth-child(1) {
    height: 3rem;
    width: 3rem;
    border: none;
    border: solid 0.1rem teal;
    border-radius: 83.5% 33.2% 66.9% 47.3%;
    background: teal;
    color: cornsilk;
  }
  & ${StyledNav}:nth-child(2) {
    border-radius: 255px 72px 132px 27px/105px 220px 57px 100px;
  }
  & ${StyledNav}:nth-child(3) {
    border-radius: 275px 55px 405px 145px/55px 245px 150px 255px;
  }
  & ${StyledNav}:nth-child(4) {
    border-radius: 305px 95px 225px 65px/86px 325px 85px 100px;
  }
  & ${StyledNav}:nth-child(5) {
    border-radius: 20px 105px 225px 15px/100px 51px 35px 52px;
  }
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

const Nav = () => (
  <StyledNav>
    <StyledLink to="/">IS</StyledLink>
    <StyledLink to="/">Work</StyledLink>
    <StyledLink to="/">Skills</StyledLink>
    <StyledLink to="/">Resume</StyledLink>
    <StyledLink to="/">Blog</StyledLink>
  </StyledNav>
)

export default Nav
