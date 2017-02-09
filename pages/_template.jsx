import React from 'react';

import '../css/main.scss';
import PageWrapper from '../components/PageWrapper';
import SiteHeader from '../components/SiteHeader';
import SiteContent from '../components/common/SiteContent';
import SiteFooter from '../components/SiteFooter';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    const activePath = this.props.location.pathname;
    return (
      <div className="full-height">
        <PageWrapper>
          <SiteHeader activePath={activePath} />
          <SiteContent page>
            {this.props.children}
          </SiteContent>
        </PageWrapper>
        <SiteFooter activePath={activePath} />
      </div>
    );
  },
});
