import React from 'react'

export default ({ children }) => <div className='layout-page'>
  <header>
    <div className='container'>
      <h1>Gatsby blog app</h1>
    </div>

  </header>
  <div className='content-page'>
    <div className='container'>
      {children()}
    </div>

  </div>
  <footer>
    <div className='container'>
      <h1><a href='https://www.gatsbyjs.org'>www.gatsbyjs.org</a></h1>
    </div>

  </footer>
  <style global jsx>{`
    :root {
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      color: black;
      --color-yellow-primary: rgb(245, 239, 77);
      --color-yellow-tint-1: rgb(138, 138, 122);
      --color-yellow-tint-2: rgb(246, 247, 221);
      --color-yellow-tint-3: rgb(130, 130, 4);
      --color-yellow-tint-4: rgb(163, 163, 125);
      --color-violet: rgb(108, 87, 229);
      --color-violet-tint-1: rgb(255, 252, 75);
      --color-violent-tint-2: rgb(145, 137, 192);
    }
    *, *:after, *:before {
      box-sizing: border-box;
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
      line-height: 1.6;
      letter-spacing: 2px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    header h1, footer h1 {
      font-size: 2rem;
      text-align: center;
      padding: 2rem 0;
      background-color: var(--color-yellow-primary);
      color: var(--color-violet);
     
    }
    @media(min-width: 1000px) {
      header h1, footer h1 {
       font-size: 3rem;
      }
    }
    footer {
      margin-top: 2rem;
    }
  `}</style>
</div>
