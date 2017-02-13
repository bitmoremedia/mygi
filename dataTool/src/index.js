import React from 'react';
import ReactDOM from 'react-dom';

import globalStyles from './global-styles';
globalStyles();
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
