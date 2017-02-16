import React, { Component } from 'react';
import _values from 'lodash/values';
import _sortBy from 'lodash/sortBy';
import _forEach from 'lodash/forEach';

import { List, ListItem, MatchedListItem, EditLink } from './styles';

import ToolTip from '../common/ToolTip';
import Divider from '../common/Divider';
import Modal from '../common/Modal';
import FoodFinder from '../FoodFinder';

class FoodSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      findFoodModalVisible: false,
      findFoodId: undefined,
    };
    this.openFindFoodModal = this.openFindFoodModal.bind(this);
    this.closeFindFoodModal = this.closeFindFoodModal.bind(this);
  }

  openFindFoodModal(e,id) {
    e.preventDefault();
    this.setState({
      findFoodModalVisible: true,
      findFoodId: id
    });
  }

  closeFindFoodModal(e) {
    e.preventDefault();
    this.setState({
      findFoodModalVisible: false,
      findFoodId: undefined
    });
  }

  render() {
    const { match, foodList, dataSources } = this.props;
    const { findFoodModalVisible, findFoodId } = this.state;

    const sourceName = match.params.id;
    const { title, data } = dataSources[sourceName] || {};
    const sourceDataArray = _sortBy(_values(data), 'name');

    const sourceMatch = {};
    if ( data ){
      _forEach(foodList, (food, foodId)=> {
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
              ✔
            </ToolTip> {name} [{gi}] <EditLink href="" onClick={(e)=>this.openFindFoodModal(e,id)}>Edit</EditLink>
          </MatchedListItem>
        );
      }
      return <ListItem>{name} [{gi}] <a href="" onClick={(e)=>this.openFindFoodModal(e,id)}>Find</a></ListItem>;
    }

    return (
      <div>
        <h2>{title}</h2>
        <Modal visible={findFoodModalVisible} onClose={this.closeFindFoodModal} width={80} height={80} measure={'%'}>
          {
            findFoodModalVisible && <FoodFinder foodId={findFoodId} sourceName={sourceName} />
          }
        </Modal>
        <Divider />
        <List>
          {sourceDataArray.map((food)=><FoodItem key={food.id} {...food}/>)}
        </List>
      </div>
    );
  }
}

export default FoodSource;
