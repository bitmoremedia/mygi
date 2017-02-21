import React, { PropTypes } from 'react'
import { Link } from 'react-router'
//import { prefixLink } from '../../../node_modules/gatsby/dist/isomorphic/gatsby-helpers';

let prefixLink = (linkTo) => {
    return linkTo
}
try {
  prefixLink = require('gatsby-helpers/prefixLink')
} catch (e) {
  console.log('*** CATCH THE MONKEY ***');
}

const PageLink = ({ to, children, className }) => {
  // add a trailing slash if there is not one (to support SPA)
  let linkTo = to
  if (to.substr(to.length-1) !== '/') {
    linkTo = to + '/'
  }
  const prefixedLink = prefixLink(linkTo)
  return (
    <Link className={className} to={prefixedLink}>
      {children}
    </Link>
  )
}

PageLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
}

export default PageLink
