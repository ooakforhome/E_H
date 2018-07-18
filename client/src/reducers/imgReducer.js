import { FETCH_IMG, NEW_IMG } from '../actions/types';

const initialState = {
  images: [],
  image: {}
};

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_IMG:
      return {
        ...state,
        images: action.payload
      };
    case NEW_IMG:
      return {
        ...state,
        image: action.payload
      };
    default:
      return state;
  }
}
