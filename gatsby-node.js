const path = require('path')
const dateFormat = require('date-format')
exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const component = path.resolve(`src/templates/article.js`)

  let graphData
  try {
    const { data } = await graphql(`
            {
              allMarkdownRemark(sort: {fields:[frontmatter___date], order: DESC}) {
                edges {
                  node {
                    headings {
                      value 
                    }
                    frontmatter {
                      id
                      date
                    }
                    id
                    html
                    excerpt
                   
                  }
                }
              }
            }
        `)
    console.log('data var', data)
    graphData = data.allMarkdownRemark.edges
  } catch (error) {
    console.log('Error log', error)
  }
  console.log(graphData.length, 'data lenth')

  graphData.forEach((edge, index) => {
    const datePath = dateFormat('dd-MM-yyThh:mm:ss', new Date(edge.node.frontmatter.date))
    createPage({
      path: `/article-${datePath}`, // required -> intentar modificar para index
      component: component,
      context: {
        id: edge.node.frontmatter.id,
        pageIndex: index,
        graphData

      }
    })
  })
}
