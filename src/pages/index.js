import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Blogs from "../components/blogs"
import Nav from "../components/nav"

const IndexPage = ({ data }) => {
  
  return(
    <Layout>
      <SEO title="Home" />
      <Nav />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Blogs data={data.blog}/>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;


export const query = graphql`
{
  blog: allMarkdownRemark(
    sort: {fields: [frontmatter___date], order: DESC} 
    filter: { fileAbsolutePath: { regex: "/blogs/"}}
    ) {
    edges {
      node {
        fields {
          slug
        }
        id
        frontmatter {
          title
          date
          read
          topic
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 200)
      }
    }
  }
}
`