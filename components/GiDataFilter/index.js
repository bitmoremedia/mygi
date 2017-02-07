import React from 'react';
import classNames from 'classnames';

import './style';
import PageLink from '../common/PageLink';
import { categoryPathMap, pathCategoryMap } from '../../utils';

const GiDataFilter = ({categoryFilter, giTypeFilter}) => {

  const currentCategory = categoryFilter;
  const currentCategoryPath = categoryPathMap()[categoryFilter];
  const currentGiTypeFilter = giTypeFilter;
  const currentGiTypePath = (currentGiTypeFilter) ? `${giTypeFilter}/` : ``;

  const FilterLink = ({categoryPath, giType}) => {

    let pathTo, linkTitle, isActive = false;

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

//       <div className="gi-data-filter__divider"></div>

  return (
    <div className="gi-data-filter">
      <h2>Category</h2>
      <FilterLink categoryPath="all"/>
      <FilterLink categoryPath="beans"/>
      <FilterLink categoryPath="breads"/>
      <FilterLink categoryPath="breakfast-cereals"/>
      <FilterLink categoryPath="dairy"/>
      <FilterLink categoryPath="fruits"/>
      <FilterLink categoryPath="snacks-and-sweet-foods"/>
      <FilterLink categoryPath="staples"/>
      <FilterLink categoryPath="vegetables"/>
      <h2>GI Type</h2>
      <FilterLink giType="all"/>
      <FilterLink giType="low-gi"/>
      <FilterLink giType="medium-gi"/>
      <FilterLink giType="high-gi"/>
    </div>
  );
};

export default GiDataFilter;
