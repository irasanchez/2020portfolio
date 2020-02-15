import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  box-shadow: 0px 3px 10px 1px rgba(222, 184, 135, 0.7); /*color name is BurlyWood, using rgba for adjusted opacity */
  & ${StyledNav}:nth-child(1) {
    border: double 8px #41403e;
    border-radius: 255px 15px 225px 15px/49px 125px 35px 59px;
    padding: 5px 2%;
  }
  & ${StyledNav}:nth-child(2) {
    border: solid 2px #41403e;
    border-radius: 255px 72px 132px 27px/105px 220px 57px 100px;
    padding: 5px 2%;
  }
  & ${StyledNav}:nth-child(3) {
    border: solid 2px #41403e;
    border-radius: 275px 55px 405px 145px/55px 245px 150px 255px;
    padding: 5px 2%;
  }
  & ${StyledNav}:nth-child(4) {
    border: solid 2px #41403e;
    border-radius: 305px 95px 225px 65px/86px 325px 85px 100px;
    padding: 5px 2%;
  }
  & ${StyledNav}:nth-child(5) {
    border: solid 2px #41403e;
    border-radius: 20px 105px 225px 15px/100px 51px 35px 52px;
    padding: 5px 2%;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: fit-content;
  color: black;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledNav>
      <StyledLink to="/">{siteTitle}</StyledLink>

      <StyledLink to="/">Work</StyledLink>
      <StyledLink to="/">Skills</StyledLink>
      <StyledLink to="/">Resume</StyledLink>
      <StyledLink to="/">Blog</StyledLink>
    </StyledNav>
  </header>
)

// expect siteTitle to be a string
Header.propTypes = {
  siteTitle: PropTypes.string,
}

// set siteTitle to empty string if missing
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
