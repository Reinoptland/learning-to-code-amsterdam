const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
          node,
          name: `slug`,
          value: slug,
        })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `)
    .then(result => {
        console.log(createPage)
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            console.log('hi')
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/activity.js`),
              context: {
                slug: node.fields.slug,
              },
            })
          })
        resolve()
      })
    })
  };