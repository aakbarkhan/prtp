import React from 'react'
import Link from 'gatsby-link'

const Blogs = ({ data }) => {
  // console.log(data);
  return (
    <div className="blog-container">
      {data.edges.map(({node}) => (
        <Link key={node.id} to={node.fields.slug} style={{ textDecoration: 'none', color: 'inherit'}}>
          <div className="blog-card">
            <h3 className="blog-title">{node.frontmatter.title}</h3>
            <p className="blog-excerpt">{node.excerpt}</p>
            <p className="blog-date-read">{node.frontmatter.date} - {node.frontmatter.read}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blogs;