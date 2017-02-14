import React, { Component } from 'react';

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

    console.log({ foodList, dataSources, foodId, sourceName });

    const thisFood = dataSources[sourceName].data[foodId];
    console.log(thisFood);

    return (
      <Container>
        <Heading>Find
          <FoodHeading>
            {thisFood.name}
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
              </Col>
            </Row>
          </Grid>
      </Container>
    );

  }
};

export default FoodFinder;
