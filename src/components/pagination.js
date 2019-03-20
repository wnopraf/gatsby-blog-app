import React from 'react'
import Button from './button'

export default ({ pageIndex, pages }) => {
  const pageEnd = pages.length - 1
  console.log('from pagination', pageIndex)

  return (
    <div>

      <div className='page-buttons'>
        { pageIndex > 0 && <Button name='Next Post' datePath={pages[pageIndex - 1].node.frontmatter.date} pageChar={'<'} />}
        { pageIndex !== 0 && <Button name='Last Post' datePath={pages[0].node.frontmatter.date} />}
        { pageIndex < pageEnd && <Button name='Prev Post' datePath={pages[pageIndex + 1].node.frontmatter.date} pageChar={'>'} />}
      </div>
      <div className='page-buttons' />
      <style jsx>{`
        :global(.page-buttons) {
          display: flex;
          margin-top: .6rem;
        }
        
      
      `}</style>
    </div>

  )
}
