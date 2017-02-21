import React, { PropTypes } from 'react'

import { giTypeDescr } from '../../utils'

import './style.scss'

const GiDataTableHeader = ({ categoryFilter, giTypeFilter }) => {
  let pageTitle = 'Glycemic Index'
  const giDescr = (giTypeFilter) ? giTypeDescr(giTypeFilter) : ''
  if (categoryFilter && !giTypeFilter) {
    pageTitle = `Glycemic Index of ${categoryFilter}`
  }
  if (!categoryFilter && giTypeFilter) {
    pageTitle = `${giDescr} GI Foods`
  }
  if (categoryFilter && giTypeFilter) {
    pageTitle = `${giDescr} GI ${categoryFilter}`
  }
  return (
    <div className="gi-data-table-header">
      <h2 className="gi-data-table-header__title">{pageTitle}</h2>
    </div>
  )
}

GiDataTableHeader.propTypes = {
  categoryFilter: PropTypes.string,
  giTypeFilter: PropTypes.oneOf(['', 'all', 'low-gi', 'medium-gi', 'high-gi']),
}

GiDataTableHeader.defaultProps = {
  categoryFilter: '',
  giTypeFilter: '',
}

export default GiDataTableHeader
