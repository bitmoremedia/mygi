import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from './types'
import * as actions from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('sync actions', () => {
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
})


describe('async actions', () => {
  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {

    const expectedActions = [
      { type: types.FETCH_TODOS_REQUEST },
      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } },
    ]
    const store = mockStore({})

    return store.dispatch(actions.getFoodlist())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
