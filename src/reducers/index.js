import { combineReducers } from "redux";
import postsReducer from './postReducer'; 
import usersReducer from './userReducer';
import userAllReducer from './userAllReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    allUser : userAllReducer
});

  