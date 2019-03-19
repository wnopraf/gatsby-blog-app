module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/data/`
    }
  },
  `gatsby-plugin-styled-jsx`,
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-remark`]
}
