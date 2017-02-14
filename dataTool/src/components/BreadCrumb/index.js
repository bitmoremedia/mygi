import React from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem } from './styles';

const BreadCrumb = ({ match, dataSources }) => {
  const url = match.url;
  const urlParts = url.split("/");
  let sourceLink;
  if ( urlParts[1] === 'source' ){
    dataSources.forEach((dataSource)=>{
      if ( dataSource.name === urlParts[2] ){
        sourceLink = <ListItem>> <Link to={`/source/${dataSource.name}`}>{dataSource.title}</Link></ListItem>;
      }
    });
  }
  return (
    <List>
      <ListItem>
        <Link to="/">Food List</Link>
      </ListItem>
      {sourceLink && sourceLink}
    </List>
  );
};

export default BreadCrumb;
