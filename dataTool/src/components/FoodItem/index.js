import React from 'react';

import { Item } from './styles';

const FoodItem = ({food}) => {
  return (
    <Item key={`${food.id}-food-item`}>
      {food.name}
    </Item>
  );
};

export default FoodItem;
