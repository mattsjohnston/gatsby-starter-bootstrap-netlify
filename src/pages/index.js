// @ts-nocheck
import React from 'react'
import { Container } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import remark from 'remark';
import remarkHtml from 'remark-html';
import Tilt from 'react-tilt';
import Img from "gatsby-image";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Layout from '../components/layout'
// import Blobs from '../components/blobs'

import logo_s from          '../images/logo_s.svg'
import workplace_fg from    '../images/workplace/fg.svg'
import workplace_mg from    '../images/workplace/mg.svg'
import workplace_bg from    '../images/workplace/bg.svg'
import coffee_fg from       '../images/coffee/fg.svg'
import coffee_mg from       '../images/coffee/mg.svg'
import coffee_bg from       '../images/coffee/bg.svg'
// import hero_shapes_1 from   '../images/hero/shapes 1.svg'
// import hero_shapes_2 from   '../images/hero/shapes 2.svg'
// import hero_shapes_3 from   '../images/hero/shapes 3.svg'

const NewsletterForm = ({ status, message, onValidated }) => {
  let email, button;
  const submit = () =>
    // email &&
    // email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
  
  return (
    <div>
      <div className={"form-container" + (status === 'success' ? ' form-container-success' : '')}>
        {status === "sending" && <div className="message" style={{ color: "white" }}>sending...</div>}
        {status === "error" && (
          <div
            className="message"
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div className="form-container-inner">

          <div className="form-success">
            <span className="message" dangerouslySetInnerHTML={{ __html: message }}></span>
          </div>

          <form onSubmit={e => {
            e.preventDefault()
            submit()
            }}>
            <div className="input-group input-group-lg">
              <input
                type="email"
                className="form-control"
                name="email"
                ref={node => (email = node)}
                placeholder="Enter your email address" />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-wide btn-secondary"
                  onClick={submit}
                  ref={node => (button = node)}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { markdownRemark: post } = data,
    about_content = remark()
      .use(remarkHtml)
      .processSync(post.frontmatter.our_story.content)
      .toString();
    
  return (
    <Layout>
      <div>
        <Helmet title={post.frontmatter.title} />
        <Container>
          
          <div className="hero card">
            <h4>{post.frontmatter.hero.subheading}</h4>
            <h1>{post.frontmatter.hero.heading}</h1>
            {/* <Blobs /> */}
          </div>

          <ul className="companies row">
            <li className="col-sm">
              <a className="company company-coffee" href="https://stoblecoffee.com">
                <Tilt className="Tilt card" options={{ scale: 1.01, max: 15, speed: 3000, transition: true, reverse: false, glare: true }}>
                  <div className="illustration">
                    <img className="illustration-piece bg" src={coffee_bg} alt="Stoble Coffee" />
                    <img className="illustration-piece mg" src={coffee_mg} alt="Stoble Coffee" />
                    <img className="illustration-piece fg" src={coffee_fg} alt="Stoble Coffee" />
                  </div>                <h3>{post.frontmatter.companies.stoble_coffee.name}</h3>
                  <p>{post.frontmatter.companies.stoble_coffee.summary}</p>
                </Tilt>
              </a>
            </li>
            <li className="col-sm">
              <a className="company company-workplace" href="https://www.stobleworkplace.com/">
                <Tilt className="Tilt card" options={{ scale: 1.01, max: 15, speed: 3000, transition: true, reverse: false, glare: true }}>
                  <div className="illustration">
                    <img className="illustration-piece bg" src={workplace_bg} alt="Stoble Workplace" />
                    <img className="illustration-piece mg" src={workplace_mg} alt="Stoble Workplace" />
                    <img className="illustration-piece fg" src={workplace_fg} alt="Stoble Workplace" />
                  </div>
                  <h3>{post.frontmatter.companies.stoble_workplace.name}</h3>
                  <p>{post.frontmatter.companies.stoble_workplace.summary}</p>
                </Tilt>
              </a>
            </li>
          </ul>

          <div className="building">
            <div className="bg-photo">
              <Img fluid={post.frontmatter.building.photo.childImageSharp.fluid} alt="Stoble - Downtown Chico, CA" />
            </div>
            <h2>{post.frontmatter.building.coming}</h2>
            <h4>{post.frontmatter.building.location}</h4>
          </div>


          <main className="our-story">
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-8">
                <h4>{post.frontmatter.our_story.subheading}</h4>
                <h1>{post.frontmatter.our_story.heading}</h1>
                <div className="content" dangerouslySetInnerHTML={{ __html: about_content }}></div>
              </div>
            </div>
              
            <div className="gallery">
              {post.frontmatter.our_story.photos.map(function(photo, index) {
                return (
                  <figure className="gallery__item gallery__item" key={index}>
                    <Img fluid={photo.childImageSharp.fluid} className="gallery__img" alt="Thiedes and Johnstons" />
                  </figure>
                );
              })}
            </div>
          </main>

          <img className="bottom-logo" src={logo_s} alt="Stoble" />

        </Container>

        <footer id="contact">
          <Container>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <h4>Subscribe</h4>
                    <h3>Stay in the know</h3>
                    <p>Get occasional emails with project updates, offers, and special event invites.</p>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <MailchimpSubscribe
                    url="//stobleco.us20.list-manage.com/subscribe/post?u=202892b1c52ef2f1fb1015967&id=fa57137320"
                    render={({ subscribe, status, message }) => (
                      <NewsletterForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                      />
                    )}
                  />

                  <div className="contact">
                    <a href="mailto:hello@stobleco.com" className="pill-link">hello@stobleco.com</a>
                  </div>
                </div>
              </div>
          </Container>
        </footer>

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
        hero {
          subheading
          heading
        }
        companies {
          stoble_coffee {
            name
            summary
          }
          stoble_workplace {
            name
            summary
          }
        }
        building {
          coming
          location
          photo {
            childImageSharp{
              fluid(maxWidth: 1080, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            },
            publicURL
          }          
        }
        our_story {
          subheading
          heading
          content
          photos {
            childImageSharp{
              fluid(maxWidth: 258, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            },
            publicURL
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
