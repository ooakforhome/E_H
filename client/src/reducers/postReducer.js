import { FETCH_PRODUCTS,FETCH_ONE, NEW_POST, UPDATE_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_PRODUCTS:
    return {
      ...state,
      items: action.payload
    };
    case FETCH_ONE:
    return {
      ...state,
      item: action.payload
    };
    case NEW_POST:
    return {
      ...state,
      item: action.payload
    };
    case UPDATE_POST:
    return {
      ...state,
      item: action.payload
    };
    default:
      return state;
  }
}
