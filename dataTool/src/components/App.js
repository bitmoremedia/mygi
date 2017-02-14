import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { getFoodList, getDataSources, getCategories } from '../api';
import { Grid, Row, Col } from './common/Grid';
import FoodList from './FoodList';
import FoodSource from './FoodSource';
import Header from './Header';
import BreadCrumb from './BreadCrumb';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      foodList: [],
      dataSources: [],
      categories: [],
    };
  }

  componentDidMount(){
    getFoodList()
      .then((foodList)=>{this.setState({foodList});})
      .catch((err)=>{console.log(err);});

    getDataSources()
      .then((dataSources)=>{this.setState({dataSources});})
      .catch((err)=>{console.log(err);});

    getCategories()
      .then((categories)=>{this.setState({categories});})
      .catch((err)=>{console.log(err);});
  }

  render() {
    const { foodList, dataSources, categories } = this.state;
    return (
      <Router>
        <div className="App">
          <Header />
            <Grid>
              <Row>
                <Col xs={12}>
                  <Route component={BreadCrumb} dataSources={dataSources} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Route exact path="/" foodList={foodList} dataSources={dataSources} categories={categories} component={FoodList} />
                  <Route path="/source/:id" foodList={foodList} dataSources={dataSources} categories={categories} component={FoodSource} />
                </Col>
              </Row>
            </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
