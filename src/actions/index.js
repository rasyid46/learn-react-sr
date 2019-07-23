import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get('/posts');
   dispatch({type: 'FETCH_POSTS', payload : response.data }) 
};  

 


export const fetchUserAll = () => async dispatch => {
 
   const response = await jsonPlaceholder.get('/users/');
   dispatch({type: 'FETCH_USERALL', payload : response.data }) 
};  


export const fetchUser = _.memoize(function(id){
  return _.memoize(async function(dispatch){
   const response = await jsonPlaceholder.get('/users/'+id);
   dispatch({type: 'FETCH_USER', payload : response.data }); 
   });
});