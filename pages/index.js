import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import PageLink from '../components/common/PageLink';

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
        <p>Welcome to MyGi</p>
        <PageLink to={'/about'}>
          About Page >>
        </PageLink>
      </div>
    )
  }
}

export default IndexPage;
