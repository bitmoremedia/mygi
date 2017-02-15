import React from 'react';

// import { Container } from './styles';

const foodListProps = {
  list: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      gi: React.PropTypes.any.isRequired,
    })
  ).isRequired,
};

const FoodList = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((food)=><li key={food.id}>{food.name} [{food.gi}]</li>)}
      </ul>
    </div>
  );
};

FoodList.propTypes = foodListProps;

export default FoodList;
