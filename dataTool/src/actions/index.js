import { getFoodList, getDataSources, getCategories } from '../api';
import {
  RECEIVE_FOODLIST,
  RECEIVE_DATASOURCES,
} from './types';

export const receiveFoodlist = (data) => {
  return {
    type: RECEIVE_FOODLIST,
    payload: data
  }
};

export const fetchFoodlist = () => {
  return (dispatch) => {
    getFoodList()
      .then((data)=>dispatch(receiveFoodlist(data)))
      .catch((err)=>console.log(err));
  };
};

export const receiveDataSources = (data) => {
  return {
    type: RECEIVE_DATASOURCES,
    payload: data
  }
};

export const fetchDataSources = () => {
  return (dispatch) => {
    getDataSources()
      .then((data)=>dispatch(receiveDataSources(data)))
      .catch((err)=>console.log(err));
  };
};
