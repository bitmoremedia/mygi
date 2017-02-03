import React, { Component } from 'react';
import Helmet from 'react-helmet';

import GiDataTable from '../../../components/GiDataTable';
import data from '../../../data/gi-by-group.json';

class BreadsPage extends Component {
  render () {
    const filters = {
      category: 'Breads'
    };
    return (
      <div>
        <Helmet
          title={'MyGi'}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <p>GI Value os Breads</p>
        <GiDataTable data={data} filters={filters}/>
      </div>
    )
  }
}

export default BreadsPage;
