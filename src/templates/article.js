import React from 'react'
import Link from 'gatsby-link'
import JsonTemplate from '../components/jsonTemplate'
import MdTemplate from '../components/mdTemplate'
import Buttons from '../components/pagination'

export default ({ data, pathContext: { id, pageIndex, graphData } }) => {
  console.log('pageIndex', pageIndex)
  console.log(data, 'data')
  return (
    <div>

      <MdTemplate {...data.allMarkdownRemark.edges[0]} />
      <Buttons pageIndex={pageIndex} pages={graphData} />
      <Link to='/'>Home</Link>
    </div>
  )
}

export const articles = graphql`query allData ($id:Int) {
    
  allMarkdownRemark(filter: {frontmatter: {id: {eq:$id}}}) {
    edges {
      node {
        headings {
          value 
        }
        id
        frontmatter {
      	  id
          date
        }
        html
        excerpt
       
      }
    }
  }
}`
