import React, { Component } from 'react';

import { getFoodList, getDataSources } from '../api';
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
        <h3>Food List</h3>
        {this.state.foodList.map(this.renderFood)}
        <h3>Data Sources</h3>
        {this.state.dataSources.map(this.renderSource)}
      </div>
    );
  }
}

export default App;
