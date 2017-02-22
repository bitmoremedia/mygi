import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/configureStore'
import globalStyles from './global-styles'
import ConnectedApp from './components/App'

globalStyles()
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
)
