import React, { Component } from 'react';
import values from 'lodash/values';
import sortBy from 'lodash/sortBy';
import forEach from 'lodash/forEach';

import { List, ListItem, MatchedListItem } from './styles';
import ToolTip from '../common/ToolTip';
import Modal from '../common/Modal';

class FoodSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      findFoodModalVisible: false
    };
    this.openFindFoodModal = this.openFindFoodModal.bind(this);
    this.closeFindFoodModal = this.closeFindFoodModal.bind(this);
  }

  openFindFoodModal(e) {
    e.preventDefault();
    this.setState({
      findFoodModalVisible: true
    });
  }

  closeFindFoodModal(e) {
    e.preventDefault();
    this.setState({
      findFoodModalVisible: false
    });
  }

  render() {
    const { match, foodList, dataSources } = this.props;
    const { findFoodModalVisible } = this.state;

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
      return <ListItem>{name} [{gi}] <a href="" onClick={this.openFindFoodModal}>Find</a></ListItem>;
    }

    return (
      <div>
        <h1>Food Source</h1>
        <h3>{title}</h3>
        <hr/>
        <Modal visible={findFoodModalVisible} onClose={this.closeFindFoodModal}>
          <div>Yeah Yeah Yeah</div>
        </Modal>
        <hr/>
        <List>
          {sourceDataArray.map((food)=><FoodItem key={food.id} {...food}/>)}
        </List>
      </div>
    );
  }
}

export default FoodSource;
