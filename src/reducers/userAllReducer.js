
export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_USERALL' :
        return  action.payload;
       default:
         return state;   
    }
};