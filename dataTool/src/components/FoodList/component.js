import React, { Component } from 'react';
import _values from 'lodash/values';
import _sortBy from 'lodash/sortBy';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import FoodItem from '../FoodItem';
import AddEditFood from '../AddEditFood';

class FoodList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddFood: false,
    };
    this.toggleAddFood = this.toggleAddFood.bind(this);
  }

  toggleAddFood() {
    this.setState({
      showAddFood: !this.state.showAddFood
    });
  }

  render() {
    const { toggleAddFood } = this;
    const { showAddFood } = this.state;
    const { foodList, dataSources } = this.props;
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

    const renderToggleAddFoodButton = () => {
      const buttonText = (this.state.showAddFood) ? 'Cancel' : 'Add';
      return <button onClick={()=>toggleAddFood()}>{buttonText}</button>;
    }

    if ( foodListArray.length && dataSourcesArray.length ){
      return (
        <div>
          {renderToggleAddFoodButton()}
          {showAddFood && <AddEditFood />}
          <Table columns={columns} data={data}/>
        </div>
      );
    }
    return (
      <div>
        {renderToggleAddFoodButton()}
        {showAddFood && <AddEditFood />}
      </div>
    );
  }
}

export default FoodList;
