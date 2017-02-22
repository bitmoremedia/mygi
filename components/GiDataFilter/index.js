import React, { PropTypes } from 'react'
import classNames from 'classnames'

import { categoryPathMap, pathCategoryMap, categoryPathList } from '../../utils'

import PageLink from '../common/PageLink'

import './style.scss'

export const FilterLink = ({ categoryPath, giType, categoryFilter, giTypeFilter }) => {
  let pathTo, linkTitle, isActive = false
  const currentCategoryPath = categoryPathMap()[categoryFilter]
  const currentGiTypeFilter = giTypeFilter
  const currentGiTypePath = (currentGiTypeFilter) ? `${giTypeFilter}/` : ''

  // category filter links
  if (categoryPath) {
    pathTo = (categoryPath === 'all') ? `/glycemic-index/${currentGiTypePath}` : `/glycemic-index/${currentGiTypePath}${categoryPath}`
    linkTitle = (categoryPath === 'all') ? 'All' : pathCategoryMap()[categoryPath]
    if (currentCategoryPath === categoryPath || (!currentCategoryPath && categoryPath === 'all')) {
      isActive = true
    }
  }

  // gi type filter links
  if (giType) {
    isActive = (currentGiTypeFilter === giType)
    pathTo = (currentCategoryPath) ? `/glycemic-index/${giType}/${currentCategoryPath}` : `/glycemic-index/${giType}`
    switch (giType) {
      case 'all':
        linkTitle = 'All'
        pathTo = (currentCategoryPath) ? `/glycemic-index/${currentCategoryPath}` : '/glycemic-index'
        isActive = (isActive || !currentGiTypeFilter)
        break
      case 'low-gi':
        linkTitle = 'Low'
        break
      case 'medium-gi':
        linkTitle = 'Medium'
        break
      case 'high-gi':
        linkTitle = 'High'
        break
      default:
        linkTitle = 'All'
    }
  }

  const linkClass = classNames('gi-data-filter__filter-item button', { 'button-outline': !isActive, 'gi-data-filter__filter-item--active': isActive })

  return (
    <PageLink className={linkClass} to={pathTo}>
      {linkTitle}
    </PageLink>
  )
}

FilterLink.propTypes = {
  categoryPath: PropTypes.string,
  giType: PropTypes.oneOf(['', 'all', 'low-gi', 'medium-gi', 'high-gi']),
  categoryFilter: PropTypes.oneOf(['', 'Beans', 'Breads', 'Cereals', 'Dairy', 'Fruits', 'Snacks & Sweets', 'Staples', 'Vegetables']),
  giTypeFilter: PropTypes.oneOf(['', 'all', 'low-gi', 'medium-gi', 'high-gi']),
}

FilterLink.defaultProps = {
  categoryPath: '',
  giType: '',
  categoryFilter: '',
  giTypeFilter: '',
}

const GiDataFilter = ({ categoryFilter, giTypeFilter }) => {
  const categoryLinks = categoryPathList().map(category =>
    <FilterLink
      key={category}
      categoryPath={category}
      categoryFilter={categoryFilter}
      giTypeFilter={giTypeFilter}
    />)

  return (
    <div className="gi-data-filter">
      <h2>Category</h2>
      <FilterLink categoryPath="all" categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
      {categoryLinks}
      <h2>GI Type</h2>
      <FilterLink giType="all" categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
      <FilterLink giType="low-gi" categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
      <FilterLink giType="medium-gi" categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
      <FilterLink giType="high-gi" categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />
    </div>
  )
}

GiDataFilter.propTypes = {
  categoryFilter: PropTypes.oneOf(['', 'Beans', 'Breads', 'Cereals', 'Dairy', 'Fruits', 'Snacks & Sweets', 'Staples', 'Vegetables']),
  giTypeFilter: PropTypes.oneOf(['', 'all', 'low-gi', 'medium-gi', 'high-gi']),
}

GiDataFilter.defaultProps = {
  categoryFilter: '',
  giTypeFilter: '',
}

export default GiDataFilter
