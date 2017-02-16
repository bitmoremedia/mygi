import * as api from '../../api';
import {
  GET_FOODLIST_REQUEST,
  GET_FOODLIST_SUCCESS,
  GET_FOODLIST_ERROR,
  RECEIVE_FOODLIST,
  GET_DATASOURCES_REQUEST,
  GET_DATASOURCES_SUCCESS,
  GET_DATASOURCES_ERROR,
  RECEIVE_DATASOURCES,
  POST_ASSOCIATE_DATASOURCE_REQUEST,
  POST_ASSOCIATE_DATASOURCE_SUCCESS,
  POST_ASSOCIATE_DATASOURCE_ERROR,
} from './types';

// **********************
// FOODLIST
// **********************

export const receiveFoodlist = (data) => {
  return {
    type: RECEIVE_FOODLIST,
    payload: data
  }
};

export const getFoodlist = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOODLIST_REQUEST });
    let data = await api.getFoodList();
    dispatch({ type: GET_FOODLIST_SUCCESS });
    dispatch(receiveFoodlist(data))
  } catch(error) {
    console.log('error', error);
    dispatch({ type: GET_FOODLIST_ERROR, payload: error });
  }
}

// **********************
// DATASOURCES
// **********************

export const receiveDataSources = (data) => {
  return {
    type: RECEIVE_DATASOURCES,
    payload: data
  }
};

export const getDataSources = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATASOURCES_REQUEST });
    let data = await api.getDataSources();
    dispatch({ type: GET_DATASOURCES_SUCCESS });
    dispatch(receiveDataSources(data))
  } catch(error) {
    console.log('error', error);
    dispatch({ type: GET_DATASOURCES_ERROR, payload: error });
  }
}

// **********************
// ASSOCIATE DATASOURCE
// **********************

export const associateDataSource = (data) => async (dispatch) => {
  try {
    dispatch({ type: POST_ASSOCIATE_DATASOURCE_REQUEST });
    let response = await api.postAssociateDataSource(data);
    if ( response.status === 'success' ){
      dispatch({ type: POST_ASSOCIATE_DATASOURCE_SUCCESS });
      // update was a success so we refetch the food list
      dispatch(getFoodlist());
    } else {
      console.log('error', response.error);
      dispatch({ type: POST_ASSOCIATE_DATASOURCE_ERROR, payload: response.error });
    }
  } catch(error) {
    console.log('error', error);
    dispatch({ type: POST_ASSOCIATE_DATASOURCE_ERROR, payload: error });
  }
};
