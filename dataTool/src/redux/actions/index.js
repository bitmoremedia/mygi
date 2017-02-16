import * as api from '../../api';
import * as types from './types';

// **********************
// FOODLIST
// **********************

export const receiveFoodlist = (data) => {
  return {
    type: types.RECEIVE_FOODLIST,
    payload: data
  }
};

export const getFoodlist = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_FOODLIST_REQUEST });
    let data = await api.getFoodList();
    dispatch({ type: types.GET_FOODLIST_SUCCESS });
    dispatch(receiveFoodlist(data))
  } catch(error) {
    console.log('error', error);
    dispatch({ type: types.GET_FOODLIST_ERROR, payload: error });
  }
}

// **********************
// DATASOURCES
// **********************

export const receiveDataSources = (data) => {
  return {
    type: types.RECEIVE_DATASOURCES,
    payload: data
  }
};

export const getDataSources = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_DATASOURCES_REQUEST });
    let data = await api.getDataSources();
    dispatch({ type: types.GET_DATASOURCES_SUCCESS });
    dispatch(receiveDataSources(data))
  } catch(error) {
    console.log('error', error);
    dispatch({ type: types.GET_DATASOURCES_ERROR, payload: error });
  }
}

// **********************
// ASSOCIATE DATASOURCE
// **********************

export const associateDataSource = (data) => async (dispatch) => {
  try {
    dispatch({ type: types.POST_ASSOCIATE_DATASOURCE_REQUEST });
    let response = await api.postAssociateDataSource(data);
    if ( response.status === 'success' ){
      dispatch({ type: types.POST_ASSOCIATE_DATASOURCE_SUCCESS });
      // update was a success so we refetch the food list
      dispatch(getFoodlist());
    } else {
      console.log('error', response.error);
      dispatch({ type: types.POST_ASSOCIATE_DATASOURCE_ERROR, payload: response.error });
    }
  } catch(error) {
    console.log('error', error);
    dispatch({ type: types.POST_ASSOCIATE_DATASOURCE_ERROR, payload: error });
  }
};
