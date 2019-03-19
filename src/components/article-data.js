import React from 'react'

export default (props) => {
  let date, title, content, img
  if (props.frontmatter) {
    const { frontmatter } = props
    date = frontmatter.date
    content = frontmatter.html
  } else {
    date = props.date
    content = props.content
    title = props.title
    img = props.img
  }
  return (
    <div>
      <div className='article-date'>{new Date(date).toLocaleString()}</div>
      {props.frontmatter ? <div className='md-post' dangerouslySetInnerHTML={{ __html: content }} /> : <div className='json-post'>
        <h1 className='article-title'>{title}</h1>
        <p className='article-content'>{content}</p>
        <div dangerouslySetInnerHTML={{ __html: img }} />

      </div> }

    </div>
  )
}
