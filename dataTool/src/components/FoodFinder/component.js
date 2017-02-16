import React, { Component } from 'react';
import _values from 'lodash/values';

import { search } from '../../utils/search';

import Divider from '../common/Divider';
import { Grid, Row, Col } from '../common/Grid';
import Button from '../common/Button';

import AddEditFood from '../AddEditFood';

import { Container, Heading, SubHeading } from './styles';
import FoodList from './FoodList';
import DataSourceFoodList from './DataSourceFoodList';

class FoodFinder extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddFood: false,
    };
    this.toggleAddFood = this.toggleAddFood.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      showAddFood: false
    });
  }

  toggleAddFood() {
    this.setState({
      showAddFood: !this.state.showAddFood
    });
  }

  render(){
    const { toggleAddFood } = this;
    const { showAddFood } = this.state;
    const { foodList, dataSources, foodId, sourceName } = this.props;

    const thisFood = dataSources[sourceName].data[foodId];
    const allDataSourcesArray = _values(dataSources);

    const filteredFoodList = search({
      searchText: thisFood.name,
      searchList: _values(foodList),
      searchField: 'name'
    });

    let allDataSources = [];
    allDataSourcesArray.forEach((source)=>{
      if (source.name !== sourceName){
        let sourceData = _values(source.data);
        // add source name as data attribute of each food item
        sourceData = sourceData.map(food=> { return {...food, source: source.name}});
        allDataSources = allDataSources.concat(sourceData);
      }
    });

    const filteredDataSources = search({
      searchText: thisFood.name,
      searchList: allDataSources,
      searchField: 'name'
    });

    const renderToggleAddFoodButton = () => {
      const buttonText = (this.state.showAddFood) ? 'Cancel' : 'Add';
      return <Button onClick={()=>toggleAddFood()}>{buttonText}</Button>;
    }

    return (
      <Container>
        <Heading>
          {thisFood.name} [{thisFood.gi}]
        </Heading>
        <Divider />
          <Grid>
            <Row>
              <Col xs={12} md={4}>
                <SubHeading>
                  Food List {renderToggleAddFoodButton()}
                </SubHeading>
                {showAddFood && <AddEditFood />}
                <FoodList list={filteredFoodList} sourceName={sourceName} sourceId={foodId} />
              </Col>
              <Col xs={12} md={7}>
                <SubHeading>
                  Other Data Sources
                </SubHeading>
                <DataSourceFoodList list={filteredDataSources} />
              </Col>
            </Row>
          </Grid>
      </Container>
    );
  }
};

export default FoodFinder;
