import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import FoodItem from '../FoodItem';

class FoodList extends Component {

  renderFoodItems(item) {
    const { foodList, dataSources } = this.props;
    const columns = [{
      key: 'food',
      label: 'Food'
    },{
      key: 'gi',
      label: 'GI Value'
    }];
    // add columns for each of our data sources
    dataSources.forEach((source)=>{
      columns.push({
        key: source.name,
        label: <Link to={`/source/${source.name}`}>{source.title}</Link>,
      });
    });

    const data = foodList.map((food)=>{
      const dataColumns = [
        { key: food.id, value: <FoodItem food={food}/> },
        { key: food.id, value: food.gi }
      ];
      // add data columns for each of our data sources
      dataSources.forEach((source)=>{
        const sourceGi = (food.sources[source.name]) ? food.sources[source.name].gi : "";
        dataColumns.push({
          key: `${food.id}-${source.name}`,
          value: sourceGi,
        });
      });
      return dataColumns;
    });

    if ( foodList.length && dataSources.length ){
      return (
        <Table columns={columns} data={data}/>
      );
    }
    return <div></div>;

  }

  render() {
    return (
      <div>
        {this.renderFoodItems()}
      </div>
    );
  }
}

export default FoodList;
