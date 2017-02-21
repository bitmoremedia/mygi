import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// gatsby workaround
// the below looks weird, but it means that we can use this component
// outside of the gatsby build run time
// which is required when running a standalone test for this component
let prefixLink = linkTo => linkTo
try {
  const gatsbyHelpers = require('gatsby-helpers') // eslint-disable-line
  prefixLink = gatsbyHelpers.prefixLink
} catch (e) {
  console.log('gatsby=helpers ignored') // eslint-disable-line
}

const PageLink = ({ to, children, className }) => {
  // add a trailing slash if there is not one (to support SPA)
  let linkTo = to
  if (to.substr(to.length - 1) !== '/') {
    linkTo = `${to}/`
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

PageLink.defaultProps = {
  className: '',
}

export default PageLink
