import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './style.scss'

const SiteContent = ({ children, page, className }) => {
  const wrapperClass = classNames('site-content', { [className]: className })
  if (page) {
    return (
      <div className={wrapperClass}>
        <div className="site-content__page">
          <div className="site-content__inner">
            {children}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={wrapperClass}>
      <div className="site-content__inner">
        {children}
      </div>
    </div>
  )
}

SiteContent.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.bool,
  className: PropTypes.string,
}

SiteContent.defaultProps = {
  page: false,
  className: '',
}

export default SiteContent
