import React, { PropTypes } from 'react';

import Button from '../../common/Button';

import { Item, FoodName, EditButton } from './styles';

const FoodItem = ({food, editAction}) => {

  const handleEdit = ()=>{
    editAction(food.id);
  };

  return (
    <Item key={`${food.id}-food-item`}>
      <FoodName>{food.name}</FoodName>
      <EditButton>
        <Button onClick={handleEdit}>edit</Button>
      </EditButton>
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
