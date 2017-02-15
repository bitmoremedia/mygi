import React from 'react';

// import { Container } from './styles';

const dataSourceFoodListProps = {
  list: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      gi: React.PropTypes.any.isRequired,
    })
  ).isRequired,
};

const DataSourceFoodList = ({ list }) => {

  return (
    <div>
      <ul>
        {list.map((food)=><li key={food.id}>{food.name} [{food.gi}]</li>)}
      </ul>
    </div>
  );
};

DataSourceFoodList.propTypes = dataSourceFoodListProps;

export default DataSourceFoodList;
