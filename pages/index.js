import React, { Component } from 'react';

import GiDataTablePage from '../components/GiDataTablePage';

class IndexPage extends Component {
  render () {
    const activePath = this.props.location.pathname;
    return (
      <GiDataTablePage
        title={'MyGi'}
        meta={[
          {"name": "description", "content": "Sample"},
          {"name": "keywords", "content": "sample, something"},
        ]}
        activePath={activePath}
      />
    )
  }
}

export default IndexPage;
