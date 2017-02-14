import React from 'react';

const FoodSource = ({ match, foodList, dataSources }) => {

  //console.log({ match, foodList, dataSources });

  const sourceName = match.params.id;
  let sourceData = [], sourceTitle;

  dataSources.forEach((source)=>{
    if ( source.name === sourceName ){
      sourceData = source.data;
      sourceTitle = source.title;
    }
  });

  console.log({sourceData});

  return (
    <div>
      <h1>Food Source</h1>
      <h3>{sourceTitle}</h3>
      <ul>
        {sourceData.map((food)=><li key={food.id}>{food.name} [{food.gi}]</li>)}
      </ul>
    </div>
  );

};

export default FoodSource;
