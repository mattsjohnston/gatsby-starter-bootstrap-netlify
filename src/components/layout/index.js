import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import * as Scroll from 'react-scroll';

import favicon from '../../images/favicon/favicon.ico';
import logo from '../../images/logo.svg';

// code syntax-highlighting theme
// feel free to change it to another one
import 'prismjs/themes/prism-twilight.css'

// main site style
import './index.scss'

const TemplateWrapper = ({ children, data }) => {
  return (
    <StaticQuery query={pageQuery} render={data => (
      <div className='App'>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link rel="icon" type="image/png" href={favicon} />
        </Helmet>
        <div className='navbar navbar-expand-md navbar-light'>
          <Container>
            <Link to='/' className='navbar-brand'><img src={logo} alt="Stoble - Better Together" /></Link>
            <ul className='nav navbar-nav'>
              <li className='nav-item nav-item-company'>
                <a href='https://stoblecoffee.com' className='nav-link'>Stoble Coffee</a>
              </li>
              <li className='nav-item nav-item-company'>
                <a href='https://stobleworkplace.com' className='nav-link'>Stoble Workplace</a>
              </li>
              <li className='nav-item'>
                <Scroll.Link to='contact' smooth={true} duration={1000} className='btn btn-outline-secondary'>Contact Us</Scroll.Link>
              </li>
            </ul>
          </Container>
        </div>
        <div className='pageContent'>{children}</div>
      </div>
    )} />
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

const pageQuery = graphql`
  query LayoutIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
