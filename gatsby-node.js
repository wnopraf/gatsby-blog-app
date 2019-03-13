const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const component = path.resolve(`src/templates/article.js`)

  let graphData
  try {
    const { data } = await graphql(`
            {
                allJsonJson(sort:{fields:[date], order:DESC}) {
                edges {
                  node {
                    id
                    date
                    title
                    content
                  }
                }
              }
            }
        `)
    console.log('data var', data)
    graphData = data
  } catch (error) {
    console.log(err)
  }
  console.log(graphData)
  const pageEnd = graphData.allJsonJson.edges.length
  graphData.allJsonJson.edges.forEach((edge, index) => {
    const datePath = new Date(edge.node.date).toLocaleDateString('en-us')
    createPage({
      path: `/article-${datePath}/`, // required -> intentar modificar para index
      component: component,
      context: {
        id: edge.node.id,
        pageIndex: index

      }
    })
  })
}
