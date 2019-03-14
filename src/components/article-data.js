import React, { Component } from 'react'

/* export default ({ title, content, date, img }) => {
  return (
    <div>
      <div className='article-date'>{new Date(date).toLocaleString()}</div>
      <h1 className='article-title'>{title}</h1>
      <p className='article-content'>{content}</p>
      <div dangerouslySetInnerHTML={{ __html: img }} />
    </div>
  )
} */

export default class extends Component {
  state = { isLoaded: false }
  componentDidMount () {
    this.setState({ isLoaded: !this.state.isLoaded })
  }
  render () {
    const { date, title, content, img } = this.props
    return <div>
      <div className='article-date'>{new Date(date).toLocaleString()}</div>
      <h1 className='article-title'>{title}</h1>
      <p className='article-content'>{content}</p>
      {this.state.isLoaded && <div dangerouslySetInnerHTML={{ __html: img }} />}
    </div>
  }
}
