import React from 'react';

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

  console.log({ searchText, list, searchField });

  return (
    <h5>SearchOrderedList</h5>
  );
}

//SearchOrderedList.propTypes = searchOrderedListProps;

export default SearchOrderedList;
