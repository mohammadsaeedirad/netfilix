import{
    GET_MOVIES,
    GET_MOVIE,
    SEARCH_MOVIES,
    SET_ALERT,
    SET_LOADING,
    REMOVE_ALERT
  

}from '../types';


export default (state,action) =>{
    switch(action.type){
        case GET_MOVIES:
            return{
                ...state,
                movies:action.payload,
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
        case SET_LOADING:
            return{
                ...state,
                loading:true,                           
            }
             


        default:
            return state;
    }

}