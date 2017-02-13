import React, { Component } from 'react';

import globalStyles from './global-styles';
import Header from './components/Header';

// apply global styles
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
