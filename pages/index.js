import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import PageLink from '../components/common/PageLink';
import GiDataTable from '../components/GiDataTable';
import data from '../data/gi-by-group.json';

class IndexPage extends Component {
  render () {
    return (
      <div>
        <Helmet
          title={'MyGi'}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <PageLink to={'/categories/breads'}>
          [Bread Filter]
        </PageLink>
        <GiDataTable data={data}/>
      </div>
    )
  }
}

export default IndexPage;
