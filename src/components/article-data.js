import React from 'react'

export default ({title,content,date}) => {
    return (
    <div>
        <div className="article-date">{new Date(date).toLocaleString()}</div>
        <h1 className="article-title">{title}</h1>
        <p className="article-content">{content}</p>
    </div>
    )
}

