import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchFoodlist, fetchDataSources } from '../actions';
import { Grid, Row, Col } from './common/Grid';
import FoodList from './FoodList';
import FoodSource from './FoodSource';
import Header from './Header';
import BreadCrumb from './BreadCrumb';

export class App extends Component {
  componentWillMount() {
    this.props.fetchFoodlist();
    this.props.fetchDataSources();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Page>
            <Grid>
              <Row>
                <Col xs={12}>
                  <Route component={BreadCrumb} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Route exact path="/" component={FoodList} />
                  <Route path="/source/:id" component={FoodSource} />
                </Col>
              </Row>
            </Grid>
          </Page>
        </div>
      </Router>
    );
  }
}

const Page = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFoodlist, fetchDataSources }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
