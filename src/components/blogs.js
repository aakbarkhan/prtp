import React from 'react'
import Link from 'gatsby-link'
import Img from "gatsby-image"

const Blogs = ({ data }) => {
  // let post = data.markdownRemark
  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  console.log(data);
  return (
    <div className="blog-container">
      
      {data.edges.map(({node}) => (
        
        <Link to={node.fields.slug} style={{ textDecoration: 'none', color: 'inherit'}}>
          <div key={node.id} className="blog-card">
          {/* <p>{node.frontmatter.featuredImage}</p> */}
            <p className="blog-date-topic">{node.frontmatter.date} &nbsp;&nbsp; ———— &nbsp;&nbsp;{node.frontmatter.topic}</p>
            <h3 className="blog-title">{node.frontmatter.title}</h3>
            <p className="blog-excerpt">{node.excerpt}</p> 
            <p className="read-more"> ——— Read More</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blogs;