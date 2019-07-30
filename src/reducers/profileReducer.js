const INITIAL_STATE = {
    isLoading: true
};

export default (state = INITIAL_STATE, action) => {
    console.log('data use');
    const abc = action.payload;
    switch (action.type){
        case 'FETCH_PROFILE' :
       return {  ...state,dataP : action.payload, isLoading : false }; 
       default:
        return state;  
    }
};