import React from 'react';
import classNames from 'classnames';

import './style';
import PageLink from '../common/PageLink';
import { categoryPathMap, pathCategoryMap, categoryPathList } from '../../utils';

const FilterLink = ({categoryPath, giType, categoryFilter, giTypeFilter}) => {

  let pathTo, linkTitle, isActive = false;
  const currentCategory = categoryFilter;
  const currentCategoryPath = categoryPathMap()[categoryFilter];
  const currentGiTypeFilter = giTypeFilter;
  const currentGiTypePath = (currentGiTypeFilter) ? `${giTypeFilter}/` : ``;

  // category filter links
  if (categoryPath) {
    pathTo = (categoryPath === 'all') ? `/glycemic-index/${currentGiTypePath}` : `/glycemic-index/${currentGiTypePath}${categoryPath}`;
    linkTitle = (categoryPath === 'all') ? 'All' : pathCategoryMap()[categoryPath];
    if ( currentCategoryPath === categoryPath || ( !currentCategoryPath && categoryPath === 'all' ) ){
      isActive = true;
    }
  }

  // gi type filter links
  if (giType) {
    isActive = (currentGiTypeFilter === giType);
    //debugger;
    pathTo = (currentCategoryPath) ? `/glycemic-index/${giType}/${currentCategoryPath}` : `/glycemic-index/${giType}`;
    switch (giType) {
      case 'all':
        linkTitle = 'All';
        pathTo = (currentCategoryPath) ? `/glycemic-index/${currentCategoryPath}` : `/glycemic-index`;
        isActive = ( isActive || ! currentGiTypeFilter);
        break;
      case 'low-gi':
        linkTitle = 'Low'
        break;
      case 'medium-gi':
        linkTitle = 'Medium'
        break;
      case 'high-gi':
        linkTitle = 'High'
        break;
      default:
        linkTitle = 'All'
    }
  }

  const linkClass = classNames('gi-data-filter__filter-item button', { 'button-outline' : !isActive, 'gi-data-filter__filter-item--active' : isActive });

  return (
    <PageLink className={linkClass} to={pathTo}>
      {linkTitle}
    </PageLink>
  );
};


const GiDataFilter = ({categoryFilter, giTypeFilter}) => {

  const categoryLinks = categoryPathList().map((category) => <FilterLink categoryPath={category} categoryFilter={categoryFilter} giTypeFilter={giTypeFilter} />);

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
  );
};

export default GiDataFilter;
