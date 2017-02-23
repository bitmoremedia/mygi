import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

import { List, ListItem } from './styled-components'

const BreadCrumb = ({ match, dataSources }) => {
  const url = match.url
  const urlParts = url.split('/')
  let sourceLink
  if (urlParts[1] === 'source' && dataSources[urlParts[2]]) {
    sourceLink = <ListItem><span>{'>'} {dataSources[urlParts[2]].title}</span></ListItem>
  }
  const isRoot = (urlParts.length === 2)
  return (
    <List>
      <ListItem>
        {isRoot && <span>Food List</span>}
        {!isRoot && <Link to="/">Food List</Link>}
      </ListItem>
      {sourceLink && sourceLink}
    </List>
  )
}

BreadCrumb.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
  dataSources: PropTypes.object,
}

BreadCrumb.defaultProps = {
  match: {},
  dataSources: {},
}

export default BreadCrumb
