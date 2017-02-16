import React, { PropTypes } from 'react';

const FoodList = ({ list, sourceName, sourceId, associateDataSource, deleteAssociatedDataSource }) => {

  // note: current assumption is that a food can only be associated with one item in the main Food list

  let associatedFoodItem;
  list.forEach((food)=>{
    if (food.sources && food.sources[sourceName] && food.sources[sourceName] === sourceId) {
      associatedFoodItem = food;
    }
  });

  const updateDataSource = (mode, food) => {
    if ( mode === 'add' ){
      associateDataSource({
        "foodId": food.id,
        sourceName,
        sourceId,
      });
    } else if ( mode === 'delete' ){
      deleteAssociatedDataSource({
        "foodId": food.id,
        sourceName,
        sourceId,
      });
    }
  }

  const renderAction = (food) => {
    if (associatedFoodItem) {
      if (food.id === associatedFoodItem.id) {
        return <button onClick={()=>updateDataSource('delete', food)}> - </button>;
      }
      return '';
    }
    return <button onClick={()=>updateDataSource('add', food)}> + </button>;
  };

  return (
    <div>
      <ul>
        {list.map((food)=><li key={food.id}>{food.name} [{food.gi}] {renderAction(food)}</li>)}
      </ul>
    </div>
  );
};

FoodList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gi: PropTypes.any.isRequired,
    })
  ).isRequired,
};

export default FoodList;
