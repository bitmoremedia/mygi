import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import testData from '../../utils/testData'

import * as types from './types'
import * as actions from './index'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockResponse = (status, statusText, response) =>
  new window.Response(JSON.stringify(response), {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json',
    },
  })

describe('food list actions', () => {
  it('receiveFoodlist should create RECEIVE_FOODLIST action', () => {
    expect(actions.receiveFoodlist([])).toEqual({
      type: types.RECEIVE_FOODLIST,
      payload: [],
    })
  })

  it('getFoodList creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve(mockResponse(200, null, testData.foodList)))

    const expectedActions = [
      { type: types.GET_FOODLIST_REQUEST },
      { type: types.GET_FOODLIST_SUCCESS },
      { type: types.RECEIVE_FOODLIST, payload: testData.foodList },
    ]
    const store = mockStore({})

    return store.dispatch(actions.getFoodlist())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('addFoodItem creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, { status: 'success' })))

    const expectedActions = [
      { type: types.ADD_FOOD_ITEM_REQUEST },
      { type: types.ADD_FOOD_ITEM_SUCCESS },
      { type: types.GET_FOODLIST_REQUEST },
    ]
    const store = mockStore({})

    return store.dispatch(actions.addFoodItem())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('updateFoodItem creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, { status: 'success' })))

    const expectedActions = [
      { type: types.UPDATE_FOOD_ITEM_REQUEST },
      { type: types.UPDATE_FOOD_ITEM_SUCCESS },
      { type: types.GET_FOODLIST_REQUEST },
    ]
    const store = mockStore({})

    return store.dispatch(actions.updateFoodItem())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('deleteFoodItem creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, { status: 'success' })))

    const expectedActions = [
      { type: types.DELETE_FOOD_ITEM_REQUEST },
      { type: types.DELETE_FOOD_ITEM_SUCCESS },
      { type: types.GET_FOODLIST_REQUEST },
    ]
    const store = mockStore({})

    return store.dispatch(actions.deleteFoodItem())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('data source actions', () => {
  it('receiveDataSources should create RECEIVE_DATASOURCES action', () => {
    expect(actions.receiveDataSources([])).toEqual({
      type: types.RECEIVE_DATASOURCES,
      payload: [],
    })
  })

  it('getDataSources creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve(mockResponse(200, null, testData.dataSources)))

    const expectedActions = [
      { type: types.GET_DATASOURCES_REQUEST },
      { type: types.GET_DATASOURCES_SUCCESS },
      { type: types.RECEIVE_DATASOURCES, payload: testData.dataSources },
    ]
    const store = mockStore({})

    return store.dispatch(actions.getDataSources())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('associateDataSource creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, { status: 'success' })))

    const expectedActions = [
      { type: types.POST_ASSOCIATE_DATASOURCE_REQUEST },
      { type: types.POST_ASSOCIATE_DATASOURCE_SUCCESS },
      { type: types.GET_FOODLIST_REQUEST },
    ]
    const store = mockStore({})

    return store.dispatch(actions.associateDataSource())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('deleteAssociatedDataSource creates appropriate actions and payloads', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, { status: 'success' })))

    const expectedActions = [
      { type: types.DELETE_ASSOCIATED_DATASOURCE_REQUEST },
      { type: types.DELETE_ASSOCIATED_DATASOURCE_SUCCESS },
      { type: types.GET_FOODLIST_REQUEST },
    ]
    const store = mockStore({})

    return store.dispatch(actions.deleteAssociatedDataSource())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
