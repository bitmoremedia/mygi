import React from 'react';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';
import forEach from 'lodash/forEach';

import { List, ListItem, MatchedListItem } from './styles';
import ToolTip from '../common/ToolTip';

const FoodSource = ({ match, foodList, dataSources }) => {

  const sourceName = match.params.id;
  const { title, data } = dataSources[sourceName] || {};
  const sourceDataArray = sortBy(values(data), 'name');

  const sourceMatch = {};
  if ( data ){
    forEach(foodList, (food, foodId)=> {
      const sourceFood = data[food.sources[sourceName]];
      if (food.sources[sourceName] && sourceFood) {
        sourceMatch[sourceFood.id] = {
          ...sourceFood,
          matched: {
            ...food
          }
        }
      }
    })
  }

  const FoodItem = ({ id, name, gi }) => {
    if ( sourceMatch[id] ){
      return (
        <MatchedListItem>
          <ToolTip
            text={`${sourceMatch[id].matched.name} [${sourceMatch[id].matched.gi}]`}
            position={'right'}
          >
            MATCH
          </ToolTip> - {name} [{gi}]
        </MatchedListItem>
      );
    }
    return <ListItem>{name} [{gi}]</ListItem>;
  }

  return (
    <div>
      <h1>Food Source</h1>
      <h3>{title}</h3>
      <List>
        {sourceDataArray.map((food)=><FoodItem key={food.id} {...food}/>)}
      </List>
    </div>
  );

};

export default FoodSource;
