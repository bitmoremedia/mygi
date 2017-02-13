import React, { Component } from 'react';

import { getFoodList, getDataSources, getCategories } from '../api';
import { Grid, Row, Col } from './common/Grid';
import Table from './common/Table';
import FoodItem from './FoodItem';
import Header from './Header';

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

  renderFoodItems(item) {
    const { foodList, dataSources } = this.state;
    console.log({ foodList, dataSources });
    const columns = [{
      key: 'food',
      label: 'Food'
    },{
      key: 'gi',
      label: 'GI Value'
    }];
    // add columns for each of our data sources
    dataSources.forEach((source)=>{
      columns.push({
        key: source.name,
        label: source.title,
      });
    });

    const data = foodList.map((food)=>{
      const dataColumns = [
        { key: food.id, value: <FoodItem food={food}/> },
        { key: food.id, value: food.gi }
      ];
      // add data columns for each of our data sources
      dataSources.forEach((source)=>{
        const sourceGi = (food.sources[source.name]) ? food.sources[source.name].gi : "";
        dataColumns.push({
          key: `${food.id}-${source.name}`,
          value: sourceGi,
        });
      });
      console.log(dataColumns);
      return dataColumns;
    });
    return (
      <Table columns={columns} data={data}/>
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>Food List</h3>
                {this.renderFoodItems()}
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
