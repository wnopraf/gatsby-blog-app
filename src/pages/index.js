import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const list = data.allJsonJson.edges.map((elm) => {
    return <li>
      <Link to={`article-${new Date(elm.node.date).toLocaleDateString('en-us')}`}>
        <span className='article-date'>{new Date(elm.node.date).toLocaleDateString()}</span>
        <h3>{elm.node.title}</h3>
      </Link>
    </li>
  })
  return <ul>{list}</ul>
}

export const articles = graphql`query allIndexData  {
    allJsonJson(sort:{fields:[date], order:DESC}) {
        edges {
          node {
            id
            date
            title
            content
          }
        }
    }
}`
