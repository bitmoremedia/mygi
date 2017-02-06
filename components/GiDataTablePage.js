import React from 'react';
import Helmet from 'react-helmet';

import GiDataFilter from '../components/GiDataFilter';
import GiDataTable from '../components/GiDataTable';
import { categoryFromPath, giTypeFilterFromPath } from '../utils';

const GiDataTablePage = ({title, meta, activePath}) => {
  const categoryFilter = categoryFromPath(activePath);
  const giTypeFilter = giTypeFilterFromPath(activePath);
  return (
    <div>
      <Helmet
        title={title}
        meta={meta}
      />
    <GiDataFilter categoryFilter={categoryFilter} giTypeFilter={giTypeFilter}/>
      <GiDataTable categoryFilter={categoryFilter} giTypeFilter={giTypeFilter}/>
    </div>
  );
};

export default GiDataTablePage;
