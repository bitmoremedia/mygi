import React from 'react';

import PageLink from './common/PageLink';

const GiDataFilter = ({categoryFilter}) => {

  //console.log('*** GiDataFilter ***');
  //console.log({categoryFilter});

  return (
    <div className="gi-data-filter">
      <PageLink to={'/'}>
        [All]
      </PageLink>
      <PageLink to={'/categories/breads'}>
        [Bread Filter]
      </PageLink>
    </div>
  );
};

export default GiDataFilter;
