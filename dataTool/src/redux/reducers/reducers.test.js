import reducers from './index'
import * as types from '../actions/types'

import testData from '../../utils/testData'

it('should handle initial state', () => {
  const state = reducers(undefined, {})
  expect(state).toEqual({
    dataSources: {},
    foodList: {},
  })
})

it('should handle receiving foodlist', () => {
  const action = {
    type: types.RECEIVE_FOODLIST,
    payload: testData.foodList,
  }
  const state = reducers(undefined, action)
  expect(state).toEqual({
    dataSources: {},
    foodList: testData.foodList,
  })
})

it('should handle receiving dataSources', () => {
  const action = {
    type: types.RECEIVE_DATASOURCES,
    payload: testData.dataSources,
  }
  const state = reducers(undefined, action)
  expect(state).toEqual({
    dataSources: testData.dataSources,
    foodList: {},
  })
})
