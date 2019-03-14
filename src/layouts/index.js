import React from 'react'

import Link from 'gatsby-link'

const Header = ({ webTitle }) => <header>
  <div>
    <figure><img src='' alt='' /></figure>
    <h1>{webTitle}</h1>
  </div>
</header>

const Footer = () => <footer>
  <h3>some footer stuff</h3>
  <p>footer recomendations</p>
  <p>footer recomendations</p>
</footer>

const Page = ({ children }) => <div className='content-layout'>
  <Header webTitle='My first gatsby-react page' />
  <div className='page-holder'>{children()}</div>
  <Footer />
</div>

export default Page
