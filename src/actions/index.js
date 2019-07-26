import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get('/posts');
   dispatch({type: 'FETCH_POSTS', payload : response.data }) 
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