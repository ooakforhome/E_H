import {FETCH_ACCENT} from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_ACCENT:
    return {
      ...state,
      items: action.payload
    };
    default:
      return state;
  }
}
