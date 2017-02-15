import React from 'react';
import _values from 'lodash/values';
import _sortBy from 'lodash/sortBy';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import FoodItem from '../FoodItem';

const FoodList = ({ foodList, dataSources }) => {
  const foodListArray = _sortBy(_values(foodList), 'name');
  const dataSourcesArray = _sortBy(_values(dataSources), 'title');

  const columns = [{
    key: 'food',
    label: 'Food'
  },{
    key: 'gi',
    label: 'GI Value'
  }];
  // add columns for each of our data sources
  dataSourcesArray.forEach((source)=>{
    columns.push({
      key: source.name,
      label: <Link to={`/source/${source.name}`}>{source.title}</Link>,
    });
  });
  const data = foodListArray.map((food)=>{
    const dataColumns = [
      { key: food.id, value: <FoodItem food={food}/> },
      { key: food.id, value: food.gi }
    ];
    // add data columns for each of our data sources
    dataSourcesArray.forEach((source)=>{
      const sourceGi = (food.sources[source.name] && source.data[food.sources[source.name]]) ? source.data[food.sources[source.name]].gi : "";
      dataColumns.push({
        key: `${food.id}-${source.name}`,
        value: sourceGi,
      });
    });
    return dataColumns;
  });

  if ( foodListArray.length && dataSourcesArray.length ){
    return (
      <Table columns={columns} data={data}/>
    );
  }
  return <div></div>;
}

export default FoodList;
