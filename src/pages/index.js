import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'date-format'

export default ({ data }) => {
  const list = data.allMarkdownRemark.edges.map((elm, i) => {
    const datePath = dateFormat('dd-MM-yyThh:mm:ss', new Date(elm.node.frontmatter.date))
    return <li className='article-description' key={i}>
      <Link to={`/article-${datePath}`} exact>
        <span className='article-date'>{new Date(elm.node.frontmatter.date).toLocaleDateString('en-GB')}</span>
        <h3 className='title'>{elm.node.headings[0].value}</h3>
        <p className='excerpt'>{elm.node.excerpt}</p>
      </Link>
      <style jsx>{`
          .article-description {
            margin-top: 2rem;
            padding: 2rem;
            background: var(--color-yellow-tint-2);
          }
          h3 {
            color: var(--color-yellow-tint-3);
          }
          .article-date {
            display: inline-block;
            margin-bottom: .5rem;
          }
      
      `}</style>
    </li>
  })
  return <ul>{list}</ul>
}

export const articles = graphql`query allIndexData  {
  allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
    edges {
      node {
        headings {
          value 
        }
        frontmatter {
          id
          date
        }
        id
        html
        excerpt
       
      }
    }
  }
}`
