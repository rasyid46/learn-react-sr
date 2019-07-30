import jsonPlaceholder from '../apis/jsonPlaceholder';
import {unsplash} from '../api/JWTAuth';

export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get('/posts');
   dispatch({type: 'FETCH_POSTS', payload : response.data }) 
};  


export const fetchProfile = () => async dispatch => { 
   const response = await unsplash.get('me');
   dispatch({type: 'FETCH_PROFILE', payload : response.data.data , loading : false }) 
};  


export const ploading = () => {
   return {
       type: 'LOADING'
   };
};

export const signIn = (token) => {
   return {
       type: 'SIGN_IN' ,payload : token
   };
};

export const signOut = () => {
   return {
       type: 'SIGN_OUT'
   };
};