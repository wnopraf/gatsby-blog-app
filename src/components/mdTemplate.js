import React from 'react'

export default ({ node: { frontmatter, html } }) => {
  return <div className='md-post'>
    <div className='md-date'>{new Date(frontmatter.date).toLocaleString()}</div>
    <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
        
    
    `}</style>
  </div>
}
