import React, { PropTypes } from 'react'

import './style.scss'

const SiteWrapper = ({ children }) =>
  <div className="page-wrapper">
    {children}
  </div>

SiteWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteWrapper;
