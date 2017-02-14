import React from 'react';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';

const FoodSource = ({ match, foodList, dataSources }) => {

  const sourceName = match.params.id;
  const { title, data } = dataSources[sourceName] || {};
  const sourceDataArray = sortBy(values(data), 'name');

  return (
    <div>
      <h1>Food Source</h1>
      <h3>{title}</h3>
      <ul>
        {sourceDataArray.map((food)=><li key={food.id}>{food.name} [{food.gi}]</li>)}
      </ul>
    </div>
  );

};

export default FoodSource;
