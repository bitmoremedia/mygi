import React, { Component } from 'react';
import _values from 'lodash/values';
import _merge from 'lodash/merge';

import { Container, Heading, FoodHeading, SubHeading } from './styles';
import Divider from '../common/Divider';
import { Grid, Row, Col } from '../common/Grid';
import SearchOrderedList from '../common/SearchOrderedList';

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
    let allDataSources = [];
    allDataSourcesArray.forEach((source)=>{
      if (source.name !== sourceName){
        allDataSources = _merge(allDataSources, _values(source.data));
      }
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
                <SearchOrderedList
                  searchText={thisFood.name}
                  list={foodList}
                  searchField={'name'}
                />
              </Col>
              <Col xs={6}>
                <SubHeading>
                  Other Data Sources
                </SubHeading>
                <SearchOrderedList
                  searchText={thisFood.name}
                  list={allDataSources}
                  searchField={'name'}
                />
              </Col>
            </Row>
          </Grid>
      </Container>
    );
  }
};

export default FoodFinder;
