import React, { Component } from 'react';

import Header from './components/Header';
import globalStyles from './global-styles';
globalStyles();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
