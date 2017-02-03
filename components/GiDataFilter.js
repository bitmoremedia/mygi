import React from 'react';

import PageLink from './common/PageLink';

const GiDataFilter = ({categoryFilter}) => {

  //console.log('*** GiDataFilter ***');
  //console.log({categoryFilter});

  return (
    <div className="gi-data-filter">
      <PageLink to={'/glycemic-index/'}>
        [All]
      </PageLink>
      <PageLink to={'/glycemic-index/beans'}>
        [Beans]
      </PageLink>
      <PageLink to={'/glycemic-index/breads'}>
        [Breads]
      </PageLink>
      <PageLink to={'/glycemic-index/breakfast-cereals'}>
        [Breakfast Cereals]
      </PageLink>
    </div>
  );
};

export default GiDataFilter;
