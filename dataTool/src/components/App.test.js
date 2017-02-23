import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from '../redux/reducers'
import { App } from './App'

// mock APIs
function getFoodlist() {
  return []
}

function getDataSources() {
  return []
}

const store = createStore(reducers)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App getFoodlist={getFoodlist} getDataSources={getDataSources} />
    </Provider>, div,
  )
})
