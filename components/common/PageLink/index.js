import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// the below looks weird, but it means that we can use this component outside of the gatsby build run time
// which is required when running a standalone test for this component
let prefixLink = (linkTo) => {
    return linkTo
}
try {
  let gatsbyHelpers = require('gatsby-helpers')
  prefixLink = gatsbyHelpers.prefixLink
} catch (e) {}

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
