import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config'
import GiDataTablePage from '../components/GiDataTablePage';

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
    const keywords = page.keywords || "";
    const meta = [
      {"name": "description", "content": description},
      {"name": "keywords", "content": keywords },
    ];

    // if this markdown page is of type 'GiDataTablePage' then
    // render that page as the GiDataTablePage component
    if (page.type === 'GiDataTablePage') {

      // add additional meta tags for social sharing
      const augmentedMetaTags = [
        ...meta,
        { property: 'og:title', content: `${title}` },
        { property: 'og:description', content: `${description}` },
        { property: 'og:image', content: `${config.appIcon}` },
        { property: 'og:url', content: `${config.baseUrl}${activePath}` },
        { property: 'og:site_name', content: `${config.siteTitle}` },
      ];

      return (
        <GiDataTablePage
          title={title}
          meta={augmentedMetaTags}
          activePath={activePath}
        />
      );
    }

    // otherwise return a standard markdown page
    return (
      <div className="markdown-page">
        <Helmet
          title={`${config.siteTitle} | ${page.title}`}
          meta={meta}
        />
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </div>
    );
  },
})
