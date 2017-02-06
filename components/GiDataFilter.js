import React from 'react';

import PageLink from './common/PageLink';
import { categoryPathMap, pathCategoryMap } from '../utils';

const GiDataFilter = ({categoryFilter, giFilter}) => {

  const currentCategory = categoryFilter;
  const currentCategoryPath = categoryPathMap()[categoryFilter];

  const FilterLink = ({categoryPath, giType}) => {

    let isActive = false;
    const category = (categoryPath) ? pathCategoryMap()[categoryPath] : 'All';

    if (!categoryFilter && !categoryPath) {
      isActive = true;
    } else {
      if ( category === categoryFilter ) {
        isActive = true;
      }
    }

    let pathTo, linkTitle;

    // category filter links
    if (categoryPath) {
      pathTo = (categoryPath === 'all') ? '/glycemic-index/' : `/glycemic-index/${categoryPath}`;
      linkTitle = (categoryPath === 'all') ? 'All' : category;
    }

    // gi type filter links
    if (giType) {
      pathTo = (currentCategoryPath) ? `/glycemic-index/${giType}/${currentCategoryPath}` : `/glycemic-index/${giType}`;
      switch (giType) {
        case 'all':
          linkTitle = 'All';
          pathTo = (currentCategoryPath) ? `/glycemic-index/${currentCategoryPath}` : `/glycemic-index`;
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

    return (
      <div>
        <PageLink to={pathTo}>
          {linkTitle} {isActive && '*'}
        </PageLink>
      </div>
    );
  };

  return (
    <div className="gi-data-filter">
      <h2>Filter By Category</h2>
      <FilterLink categoryPath="all"/>
      <FilterLink categoryPath="beans"/>
      <FilterLink categoryPath="breads"/>
      <FilterLink categoryPath="breakfast-cereals"/>
      <FilterLink categoryPath="dairy"/>
      <FilterLink categoryPath="fruits"/>
      <FilterLink categoryPath="snacks-and-sweet-foods"/>
      <FilterLink categoryPath="staples"/>
      <FilterLink categoryPath="vegetables"/>
      <h2>Filter By GI Type</h2>
      <FilterLink giType="all"/>
      <FilterLink giType="low-gi"/>
      <FilterLink giType="medium-gi"/>
      <FilterLink giType="high-gi"/>
    </div>
  );
};

export default GiDataFilter;
