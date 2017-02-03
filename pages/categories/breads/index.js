import React, { Component } from 'react';

import GiDataTablePage from '../../../components/GiDataTablePage';

class BreadsPage extends Component {
  render () {
    const activePath = this.props.location.pathname;
    return (
      <GiDataTablePage
        title={'Breads'}
        meta={[
          {"name": "description", "content": "Sample"},
          {"name": "keywords", "content": "sample, something"},
        ]}
        activePath={activePath}
      />
    )
  }
}

export default BreadsPage;
