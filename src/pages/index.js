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
              <a className="company company-workplace" href="https://stoblecoffee.com">
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
                    <a href="https://www.facebook.com/Stoble-367024677359975/" className="icon-links" target="_blank" rel="noopener noreferrer">
                      <svg role="img" className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg>
                    </a>
                    <a href="https://www.instagram.com/stobleco/" className="icon-links" target="_blank" rel="noopener noreferrer">
                      <svg role="img" className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg>
                    </a>
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
