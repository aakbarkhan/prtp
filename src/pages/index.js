import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import BlogCards from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"
import Footer from "../components/Footer"

const IndexPage = ({ data }) => {
  return(
    <Layout>
      <SEO title="Home" />
      <FeaturedBlog data={data.blog}/>
      <BlogCards data={data.blog}/>
      <Footer data={data.social_icons}/>
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
          image {
            childImageSharp{
                sizes(maxWidth: 630) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
        }
        excerpt(pruneLength: 200)
      }
    }
  }
  social_icons: allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/social-media/"}}
  ) {
    edges {
      node {
        frontmatter {
          instagram
          twitter
          medium
          linkedin
        }
      }
    }
  }
}
`