import React, { Component } from 'react';
import PageLink from '../components/common/PageLink';

class IndexPage extends Component {
  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <PageLink to={'/glycemic-index/'}>
          <button>Glycemic Index Food List</button>
        </PageLink>
      </div>
    )
  }
}

export default IndexPage;
