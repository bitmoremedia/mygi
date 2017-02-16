import React, { Component } from 'react';
import _values from 'lodash/values';
import _sortBy from 'lodash/sortBy';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import FoodItem from './FoodItem';
import Modal from '../common/Modal';
import AddEditFood from '../AddEditFood';

class FoodList extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddFood: false,
      showEditFoodModal: false,
      editFoodId: undefined,
    };
    this.toggleAddFood = this.toggleAddFood.bind(this);
    this.openEditFoodModal = this.openEditFoodModal.bind(this);
    this.closeEditFoodModal = this.closeEditFoodModal.bind(this);
  }

  toggleAddFood() {
    this.setState({
      showAddFood: !this.state.showAddFood
    });
  }

  openEditFoodModal(id) {
    this.setState({
      showEditFoodModal: true,
      editFoodId: id
    });
  }

  closeEditFoodModal() {
    this.setState({
      showEditFoodModal: false,
      editFoodId: undefined
    });
  }

  render() {
    const { toggleAddFood, openEditFoodModal, closeEditFoodModal } = this;
    const { showAddFood, showEditFoodModal, editFoodId } = this.state;
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
        { key: food.id, value: <FoodItem food={food} editAction={openEditFoodModal} /> },
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

    return (
      <div>
        {renderToggleAddFoodButton()}
        {showAddFood && <AddEditFood />}
        { foodListArray.length > 0 && dataSourcesArray.length > 0 && <Table columns={columns} data={data}/> }
        <Modal visible={showEditFoodModal} onClose={closeEditFoodModal}>
          {showEditFoodModal && <AddEditFood mode='edit' editFoodId={editFoodId} />}
        </Modal>
      </div>
    );
  }
}

export default FoodList;
