import React from 'react'

export default ({ node: { frontmatter, html } }) => {
  return <div className='md-post'>
    <div className='md-date'>{new Date(frontmatter.date).toLocaleString()}</div>

    <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
        .html :global(p) {
            line-height: 1.6;
        }
        .html :global(h1) {
            color: var(--color-yellow-tint-3);
        }
        .html :global(.img-wrapper) {
            text-align: center;
            padding: 2rem 0;
        }
    
    `}</style>

  </div>
}
