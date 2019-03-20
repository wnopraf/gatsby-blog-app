import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'date-format'
import css from 'styled-jsx/css'

export default ({ name, datePath, pageChar }) => {
  const dateString = dateFormat('dd-MM-yyThh:mm:ss', new Date(datePath))
  const dateToPath = `/article-${dateString}`
  const { className, styles } = css.resolve`.Prev-Post {
    margin-left: auto;
  }
  
  .Prev-Post:after {
    position: absolute;
    content: '\\232a';
    display: inline-block;
    right: -3px;
  }
  .Next-Post:before {
    position: absolute;
    content: '\\2329';
    display: inline-block;
    left: -3px;
  }
  .Last-Post {
    margin-left: 1rem;
  }
  .home {

  }`
  console.log(dateToPath)
  return (

    <Link className={name.replace(' ', '-') + ' ' + className} to={dateToPath} >
      {name}
      {styles}
    </Link>

  )
}
