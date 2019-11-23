import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

import Blogs from "../components/BlogCards"
import FeaturedBlog from "../components/FeaturedBlog"

const IndexPage = ({ data }) => {
  
  return(
    <Layout>
      <SEO title="Home" />
      <FeaturedBlog data={data.blog}/>
      <Blogs data={data.blog}/>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/about/">Go to about</Link>
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
}
`

// hero {
//   childImageSharp {
//     fluid(maxWidth: 800) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }