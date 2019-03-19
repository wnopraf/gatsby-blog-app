import React from 'react'
import Button from './button'

export default ({ pageIndex, pages }) => {
  const pageEnd = pages.length - 1
  console.log('from pagination', pageIndex)

  return (
    <div>
      { pageIndex > 0 && <Button name='Next Post' datePath={pages[pageIndex - 1].node.frontmatter.date} />}
      { pageIndex < pageEnd && <Button name='Prev Post' datePath={pages[pageIndex + 1].node.frontmatter.date} />}
      {pageIndex !== 0 && <Button name='Last Post' datePath={pages[0].node.frontmatter.date} />}
    </div>
  )
}
