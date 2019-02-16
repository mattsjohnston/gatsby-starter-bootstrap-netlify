import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log(data);

  const { markdownRemark: post } = data
  return (
    <Layout>
      <div>
        <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
        <Container>
          <h1 className='display-3'>{post.frontmatter.title}</h1>
        </Container>
        <Container dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
