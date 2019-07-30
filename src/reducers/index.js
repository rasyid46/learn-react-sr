import { combineReducers } from "redux";
import postsReducer from './postReducer'; 
import authReducer from './authReducer'; 
import postReducer from './profileReducer';
export default combineReducers({
    posts: postsReducer,
    auth : authReducer,
    profile :postReducer
});

  