import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config'
import GiDataTablePage from '../components/GiDataTablePage';
import { appendToKeyWords, categoryFromPath } from '../utils';

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const activePath = this.props.location.pathname;
    const page = this.props.route.page.data;
    const title = page.title || "";
    const description = page.description || "";
    let keywords = page.keywords || "";
    // append any dynamic keywords
    if (page.dynamicKeyword) {
      keywords = keywords + appendToKeyWords(page.dynamicKeyword);
    }
    const meta = [
      {"name": "description", "content": description},
      {"name": "keywords", "content": keywords },
    ];
    // if this markdown page is of type 'GiDataTablePage' then
    // render that component
    if (page.type === 'GiDataTablePage') {
      return (
        <GiDataTablePage
          title={title}
          meta={meta}
          activePath={activePath}
        />
      );
    }

    // otherwise return a standard markdown page
    return (
      <div className="markdown">
        <Helmet
          title={`${config.siteTitle} | ${page.title}`}
          meta={meta}
        />
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    );
  },
})
