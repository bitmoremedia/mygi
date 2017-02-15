import {
  RECEIVE_FOODLIST,
  RECEIVE_DATASOURCES,
} from '../actions/types';

const initialState = {
  foodList: {},
  dataSources: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RECEIVE_FOODLIST: {
      return { ...state, foodList: payload }
    }
    case RECEIVE_DATASOURCES: {
      return { ...state, dataSources: payload }
    }
    default: return state;
  }
};

export default reducer;
