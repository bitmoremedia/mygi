import {
  getFoodList,
  getDataSources,
  getCategories,
  postAssociateDataSource,
} from '../../api';
import {
  GET_FOODLIST_REQUEST,
  GET_FOODLIST_SUCCESS,
  GET_FOODLIST_ERROR,
  RECEIVE_FOODLIST,
  GET_DATASOURCES_REQUEST,
  GET_DATASOURCES_SUCCESS,
  GET_DATASOURCES_ERROR,
  RECEIVE_DATASOURCES,
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

export const fetchFoodlist = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FOODLIST_REQUEST });
    let data = await getFoodList();
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

export const fetchDataSources = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATASOURCES_REQUEST });
    let data = await getDataSources();
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

export const associateDataSource = (data) => {
  return (dispatch) => {
    postAssociateDataSource(data)
      .then(
        // (data)=>dispatch(receiveDataSources(data))
        (response)=>{
          console.log('postAssociateDataSource', response);
        }
      )
      .catch((err)=>console.log(err));
  };
};
