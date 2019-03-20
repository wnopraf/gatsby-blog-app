import React from 'react'
import Link from 'gatsby-link'
import MdTemplate from '../components/mdTemplate'
import Buttons from '../components/pagination'

export default ({ data, pathContext: { id, pageIndex, graphData } }) => {
  console.log('pageIndex', pageIndex)
  console.log(data, 'data')
  return (
    <div className='article-wrapper'>
      <MdTemplate {...data.allMarkdownRemark.edges[0]} />
      <Buttons pageIndex={pageIndex} pages={graphData} />
      <div className='page-buttons'>
        <Link className='home-button' to='/'>Home</Link>
      </div>

      <style jsx global >{`
          .article-wrapper {
            padding: 2rem .6rem;
          }
          .article-wrapper a {
            position: relative;
            padding: .6rem 1rem;
            background-color: var(--color-yellow-tint-4);
            color: var(--color-text-button);
            cursor: pointer;
          }
          
          .home-button {
            margin: 0 auto;
          }
      
      `}</style>
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
