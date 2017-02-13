import React, { Component } from 'react';

import { getFoodList, getDataSources, getCategories } from '../api';
import { Grid, Row, Col } from './common/Grid';
import Header from './Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      foodList: [],
      dataSources: [],
    };
  }

  componentDidMount(){
    getFoodList()
      .then(
        (foodList)=>{
          this.setState({
            foodList
          });
        }
      ).catch((err)=>{
        console.log(err);
      });

    getDataSources()
      .then(
        (data)=>{ console.log(data) }
      ).catch((err)=>{
        console.log(err);
      });

    getCategories()
      .then(
        (data)=>{ console.log(data) }
      ).catch((err)=>{
        console.log(err);
      });
  }

  renderFood(item) {
    return item.name;
  }

  renderSource(item) {
    return item.name;
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <h3>Food List</h3>
                {this.state.foodList.map(this.renderFood)}
              </Col>
              <Col xs={6} md={3}>
                <h3>Data Sources</h3>
                {this.state.dataSources.map(this.renderSource)}
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
