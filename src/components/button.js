import React from 'react'
import Link from 'gatsby-link'

export default ({ name, datePath }) => {
  const dateToPath = `/article-${new Date(datePath).toLocaleDateString('en-us')}`
  console.log(dateToPath)
  return (

    <Link to={dateToPath}>{name}</Link>

  )
}
