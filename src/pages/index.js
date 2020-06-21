import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Resources from "../components/Resources"
import styled from "styled-components"
import ProfileCard from "../components/ProfileCard"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="👋" />

      <ProfileCard />

      <Work />

      <Resources />
      <Contact />
    </Layout>
  )
}
export default IndexPage
