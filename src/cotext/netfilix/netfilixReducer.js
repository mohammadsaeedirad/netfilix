import{
    GET_MOVIES,
    GET_MOVIE,
    SEARCH_MOVIES,
    SET_LOADING,
    SET_TEXT 

}from '../types';


   const Reducer = (state,action) => {
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                movies:action.payload,
                metaData:action.payload2,
                loading:false     
            }
        case GET_MOVIE:
            return{
                ...state,
                movie:action.payload,
                loading:false     
            }
        case SEARCH_MOVIES:
            return{
                ...state,
                searchResult:action.payload,   
                loading:false     
            }
        case SET_TEXT :
            return{
                ...state,            
                text:action.payload     
            }    
        case SET_LOADING:
            return{
                ...state,
                loading:true,                           
            }
             


        default:
            return state;
    }

}

export default Reducer;