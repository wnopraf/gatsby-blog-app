import React from 'react'
import Link from 'gatsby-link'
import dateFormat from 'date-format'

export default ({ name, datePath }) => {
  const dateString = dateFormat('dd-MM-yyThh:mm:ss', new Date(datePath))
  const dateToPath = `/article-${dateString}`
  console.log(dateToPath)
  return (

    <Link to={dateToPath} exact >{name}</Link>

  )
}
