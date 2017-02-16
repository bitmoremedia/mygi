import React, { PropTypes } from 'react';

import { Item, FoodName, EditButton } from './styles';

const FoodItem = ({food, editAction}) => {

  const handleEdit = ()=>{
    editAction(food.id);
  };

  return (
    <Item key={`${food.id}-food-item`}>
      <FoodName>{food.name}</FoodName>
      <EditButton onClick={handleEdit}>edit</EditButton>
    </Item>
  );
};

FoodItem.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gi: PropTypes.any.isRequired,
  }).isRequired,
  editAction: PropTypes.func.isRequired,
};

export default FoodItem;
