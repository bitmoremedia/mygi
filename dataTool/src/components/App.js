import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Grid, Row, Col } from './common/Grid';
import FoodList from './FoodList';
import FoodSource from './FoodSource';
import Header from './Header';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Grid>
              <Row>
                <Col xs={12}>
                  <ul>
                    <li><Link to="/">Food List</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/source/havard">Source - Havard</Link></li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Route exact path="/" component={FoodList}/>
                  <Route path="/about" component={About}/>
                  <Route path="/source/:id" component={FoodSource}/>
              </Col>
              </Row>
            </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
