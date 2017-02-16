import React from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from './styles';

const BreadCrumb = ({ match, dataSources }) => {
  const url = match.url;
  const urlParts = url.split("/");
  let sourceLink;
  if ( urlParts[1] === 'source' && dataSources[urlParts[2]] ){
    sourceLink = <ListItem>> {dataSources[urlParts[2]].title}</ListItem>;
  }

  const isRoot = (urlParts.length === 2);

  return (
    <List>
      <ListItem>
        {isRoot && <span>Food List</span>}
        {!isRoot && <Link to="/">Food List</Link>}
      </ListItem>
      {sourceLink && sourceLink}
    </List>
  );
};

export default BreadCrumb;
