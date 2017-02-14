import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const BreadCrumb = ({ match }) => {
  //console.log('breadcrumb', match);
  console.log('breadcrumb', match);
  const url = match.url;

  let sourceLink = <li><Link to="/source/havard">Source - Havard</Link></li>;
  sourceLink = false;
  // debugger;

  return (
    <ul>
      <li><Link to="/">Food List</Link></li>
      {sourceLink && sourceLink}
    </ul>
  );
};

export default BreadCrumb;
