import React from 'react';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/milligram/dist/milligram.css';
import '../css/main.css';

import SiteHeader from '../components/SiteHeader';
import SiteContent from '../components/SiteContent';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    const activePath = this.props.location.pathname;
    return (
      <div>
        <SiteHeader activePath={activePath}/>
        <SiteContent>
          {this.props.children}
        </SiteContent>
      </div>
    );
  },
});
