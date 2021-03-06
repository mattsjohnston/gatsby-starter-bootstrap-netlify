const path = require('path')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};

// exports.createPages = ({ actions: { createPage }, graphql }) => {
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               contentType
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       console.log(node);
//       createPage({
//         path: node.frontmatter.path,
//         component: path.resolve(`src/templates/${String(node.frontmatter.contentType)}.js`),
//         context: {} // additional data can be passed via context
//       })
//     })
//   })
// }
