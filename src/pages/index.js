// @ts-nocheck
import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import remark from 'remark';
import remarkHtml from 'remark-html';
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data,
    hero = remark()
      .use(remarkHtml)
      .processSync(post.frontmatter.hero)
      .toString(),
    about_content = remark()
      .use(remarkHtml)
      .processSync(post.frontmatter.our_story.content)
      .toString();

  console.log(post.frontmatter);
    
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

          <div className="building" style={{ backgroundImage: `url(${post.frontmatter.building.photo})`}}>
            <h1>{post.frontmatter.building.coming}</h1>
            <h4>{post.frontmatter.building.location}</h4>
          </div>


          <main className="our-story">
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-8">
                <h4>{post.frontmatter.our_story.subheading}</h4>
                <h1>{post.frontmatter.our_story.heading}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: about_content }}></div>
              </div>

              <div className="gallery">
                {post.frontmatter.our_story.photos.map(function(photo, index) {
                  console.log(photo);
                  return (
                    <figure className="gallery__item gallery__item">
                      <img src={photo} class="gallery__img" alt="Thiedes and Johnstons" />
                    </figure>
                  );
                })}
              </div>

            </div>
          </main>

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
          photo
        }
        our_story {
          subheading
          heading
          content
          photos
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
