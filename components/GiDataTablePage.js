import React from 'react';
import Helmet from 'react-helmet';

import GiDataFilter from '../components/GiDataFilter';
import GiDataTable from '../components/GiDataTable';
import { categoryFromPath } from '../utils';

const GiDataTablePage = ({title, meta, activePath}) => {
  const categoryFilter = categoryFromPath(activePath);
  debugger;
  return (
    <div>
      <Helmet
        title={title}
        meta={meta}
      />
      <GiDataFilter categoryFilter={categoryFilter}/>
      <GiDataTable categoryFilter={categoryFilter}/>
    </div>
  );
};

export default GiDataTablePage;
