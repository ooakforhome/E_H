import { combineReducers } from 'redux';
import postReducer from './postReducer';
import imgReducer from './imgReducer';
import sortReducer from './sortReducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  posts: postReducer,
  imgposts: imgReducer,
  form: formReducer,
  accents: sortReducer
});

export default rootReducer;
