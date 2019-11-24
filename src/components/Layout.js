/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Nav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1300,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
