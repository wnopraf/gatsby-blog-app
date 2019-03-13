import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article-data'
import Buttons from '../components/pagination'

export default ({data,pathContext:{id,pageIndex}}) => {
    console.log('from article.js-line-6:pageIndex',pageIndex)
     
    
    const pages = data.allJsonJson.edges
    return (
        <div>
            <Article {...data.jsonJson}/>
            <Buttons pageIndex={pageIndex} pages={pages}/>
            <Link to="/">Home</Link>
        </div>
    )
}




export const articles = graphql`query allJsonData ($id:String) {
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
    jsonJson(id:{eq:$id}){
    id
    date
    content
    title
  }
}`