import * as types from './types'
import * as actions from './index'

it('receiveFoodlist should create RECEIVE_FOODLIST action', () => {
  expect(actions.receiveFoodlist([])).toEqual({
    type: types.RECEIVE_FOODLIST,
    payload: [],
  })
})

it('receiveDataSources should create RECEIVE_DATASOURCES action', () => {
  expect(actions.receiveDataSources([])).toEqual({
    type: types.RECEIVE_DATASOURCES,
    payload: [],
  })
})
