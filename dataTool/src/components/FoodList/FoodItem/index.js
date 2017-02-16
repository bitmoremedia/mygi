import React, { PropTypes } from 'react';

import { Item } from './styles';

const FoodItem = ({food, editAction}) => {
  return (
    <Item key={`${food.id}-food-item`}>
      {food.name}
    </Item>
  );
};

FoodItem.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gi: PropTypes.any.isRequired,
  }).isRequired,
};

export default FoodItem;
