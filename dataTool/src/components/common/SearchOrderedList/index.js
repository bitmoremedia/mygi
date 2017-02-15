import React from 'react';
import _isArray from 'lodash/isArray';
import _values from 'lodash/values';

import { search } from '../../../utils/search';

// import { Container } from './styles';

/*
const searchOrderedListProps = {
  text: React.PropTypes.string.isRequired,
  position: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  length: React.PropTypes.oneOf(['small', 'medium', 'large', 'fit']),
  children: React.PropTypes.any.isRequired,
}
*/

const SearchOrderedList = ({ searchText, list, searchField }) => {

  const searchList = (_isArray(list)) ? list : _values(list);
  const searchResults = search({ searchText, searchList, searchField: 'name' });

  return (
    <div>
      <h5>SearchOrderedList</h5>
      <ul>
        {searchResults.map((food)=><li key={food.id}>{food.name} [{food.gi}]</li>)}
      </ul>
    </div>
  );
}

//SearchOrderedList.propTypes = searchOrderedListProps;

export default SearchOrderedList;
