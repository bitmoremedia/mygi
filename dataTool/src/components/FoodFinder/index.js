import React, { Component } from 'react';
import _values from 'lodash/values';

import { search } from '../../utils/search';

import Divider from '../common/Divider';
import { Grid, Row, Col } from '../common/Grid';

import { Container, Heading, FoodHeading, SubHeading } from './styles';
import FoodList from './FoodList';
import DataSourceFoodList from './DataSourceFoodList';

class FoodFinder extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showHelp: false
    };
  }

  render(){
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
        allDataSources = allDataSources.concat(_values(source.data));
      }
    });

    const filteredDataSources = search({
      searchText: thisFood.name,
      searchList: allDataSources,
      searchField: 'name'
    });

    return (
      <Container>
        <Heading>Find
          <FoodHeading>
            {thisFood.name} [{thisFood.gi}]
          </FoodHeading>
        </Heading>
        <Divider />
          <Grid>
            <Row>
              <Col xs={6}>
                <SubHeading>
                  Food List
                </SubHeading>
                <FoodList list={filteredFoodList} />
              </Col>
              <Col xs={6}>
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
