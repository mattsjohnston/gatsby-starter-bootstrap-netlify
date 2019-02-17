// @ts-nocheck
import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import remark from 'remark';
import remarkHtml from 'remark-html';
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data
  const hero = remark()
    .use(remarkHtml)
    .processSync(post.frontmatter.hero)
    .toString();
    
  return (
    <Layout>
      <div>
        <Helmet title={post.frontmatter.title} />
        <Container>
          
          <div className="hero card" dangerouslySetInnerHTML={{ __html: hero }}></div>
          <ul className="companies row">
            {post.frontmatter.companies.map(function (company, index) {
              return (
                <li className="col-sm">
                  <div className="company card">
                    <img src={company.graphic} alt={company.name} />
                    <h3>{company.name}</h3>
                    <p>{company.summary}</p>
                  </div>
                </li>
              );
            })}
          </ul>

        </Container>
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
        title
        path
        hero
        companies {
          name
          summary
          graphic
        }
        building {
          coming
          location
        }
        our_story {
          subheading
          heading
          content
          photos {
            photo_1
            photo_2
            photo_3
            photo_4
            photo_5
            photo_6
            photo_7
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
