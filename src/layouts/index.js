import React from 'react'

import Link from 'gatsby-link'

export default ({ children }) => <div className='layout-page'>
  <header>
    <div className='container'>
      <h1>Gabsby blog app</h1>
    </div>

  </header>
  <div className='content-page'>
    <div className='container'>
      {children()}
    </div>

  </div>
  <footer>
    <div className='container'>
      <h1><a href=''>www.gatsbyjs.org</a></h1>
    </div>

  </footer>
  <style global jsx>{`
    :root {
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      color: black;

    }
    .container {
      width: 100%;
      padding: 0 1rem;
      margin: 0 auto;
    }
    @media(min-width: 1000px) {
      .container {
        max-width: 960px;
      }
    }
    @media(min-width: 1200px) {
      .container {
        max-width: 1060px;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    h1,h2,h3 {
      font-family: 'Baloo Chettan', cursive;
      margin: 0;
      padding: 0;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `}</style>
</div>
