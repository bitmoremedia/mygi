import React, { Component } from 'react';
import _values from 'lodash/values';
import _sortBy from 'lodash/sortBy';
import { Link } from 'react-router-dom';

import Table from '../common/Table';
import Modal from '../common/Modal';
import AddEditFood from '../AddEditFood';
import Button from '../common/Button';

import { AddButton } from './styles';
import FoodItem from './FoodItem';

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

  componentWillReceiveProps(nextProps) {
    // a bit hacky - but if props have changed then hide the add/edit fields
    this.setState({
      showAddFood: false,
      showEditFoodModal: false,
    });
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
      key: 'category',
      label: 'Category'
    },{
      key: 'gi',
      label: 'GI Value'
    },{
      key: 'average',
      label: 'Average GI'
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
        { key: food.id, value: food.category },
        { key: food.id, value: food.gi },
        { key: food.id, value: 'TBC' },
      ];
      let giTotal = 0, giCount = 0, giAverage;
      // add data columns for each of our data sources
      dataSourcesArray.forEach((source)=>{
        const sourceGi = (food.sources[source.name] && source.data[food.sources[source.name]]) ? source.data[food.sources[source.name]].gi : "";
        dataColumns.push({
          key: `${food.id}-${source.name}`,
          value: sourceGi,
        });
        if (parseInt(sourceGi, 10) > 0) {
          giTotal += parseInt(sourceGi, 10);
          giCount += 1;
        }
      });
      // update the average GI value if we have one
      if ( giTotal > 0 && giCount > 0 ){
         giAverage = (giTotal/giCount);
        dataColumns[3].value = giAverage.toFixed(0);
      }
      return dataColumns;
    });

    const renderToggleAddFoodButton = () => {
      const buttonText = (this.state.showAddFood) ? 'Cancel' : 'Add';
      return <AddButton><Button onClick={()=>toggleAddFood()}>{buttonText}</Button></AddButton>;
    }

    return (
      <div>
        {renderToggleAddFoodButton()}
        {showAddFood && <AddEditFood layout="inline"/>}
        { foodListArray.length > 0 && dataSourcesArray.length > 0 && <Table columns={columns} data={data}/> }
        <Modal visible={showEditFoodModal} onClose={closeEditFoodModal}>
          {showEditFoodModal && <AddEditFood mode='edit' editFoodId={editFoodId} />}
        </Modal>
      </div>
    );
  }
}

export default FoodList;
