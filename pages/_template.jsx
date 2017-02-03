import React from 'react';
import '../css/main';

import SiteHeader from '../components/SiteHeader';

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
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },
});
