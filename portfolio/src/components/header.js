import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Link to="/">Work</Link>
      <Link to="/">Skills</Link>
      <Link to="/">Resume</Link>
      <Link to="/">Blog</Link>
    </div>
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
