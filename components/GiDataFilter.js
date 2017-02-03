import React from 'react';

import PageLink from './common/PageLink';
import { categoryPathMap, pathCategoryMap } from '../utils';

const GiDataFilter = ({categoryFilter}) => {

  const FilterLink = ({categoryPath}) => {

    let isActive = false;
    const category = (categoryPath) ? pathCategoryMap()[categoryPath] : 'All';

    if (!categoryFilter && !categoryPath) {
      isActive = true;
    } else {
      if ( category === categoryFilter ) {
        isActive = true;
      }
    }

    const pathTo = (categoryPath) ? '/glycemic-index/' + categoryPath : '/glycemic-index/';

    return (
      <div>
        <PageLink to={pathTo}>
          {category} {isActive && '*'}
        </PageLink>
      </div>
    );
  };

  return (
    <div className="gi-data-filter">
      <FilterLink/>
      <FilterLink categoryPath="beans"/>
      <FilterLink categoryPath="breads"/>
      <FilterLink categoryPath="breakfast-cereals"/>
      <FilterLink categoryPath="dairy"/>
      <FilterLink categoryPath="fruits"/>
      <FilterLink categoryPath="snacks-and-sweet-foods"/>
      <FilterLink categoryPath="staples"/>
      <FilterLink categoryPath="vegetables"/>
    </div>
  );
};

export default GiDataFilter;
