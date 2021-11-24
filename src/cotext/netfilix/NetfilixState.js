import React ,{useReducer} from 'react'
import NetfilixContext from './netfilixContext';
import NetfilixReducer from './netfilixReducer';
import axios from 'axios';
import{
    GET_MOVIES,
    SEARCH_MOVIES,
    SET_ALERT,
    SET_LOADING,
    REMOVE_ALERT,
    GET_MOVIE
}from '../types';
 const NetfilixState = props => {

        const initialState={
            movies:[],
            loading:false,
            alert:null,
            movie:{},
            searchResult:[],
            metaData:{}
          
            
        }
    
    const [state,dispatch]=useReducer(NetfilixReducer,initialState);


    const getMovies =async (page) => {

        setLoading();

      const res=await axios.get(`https://moviesapi.ir/api/v1/movies?page=${page}` );
        dispatch({
            type:GET_MOVIES,
            payload:res.data.data,        
        })
      };
      const getMovie =async (id) => {

            setLoading();

      const res=await axios.get(`https://moviesapi.ir/api/v1/movies/${id}` );
      dispatch({
            type:GET_MOVIE,
            payload:res.data,
        })
      };
      const searchMovies =async (text) => {

        setLoading();

        const res=await axios.get(`https://moviesapi.ir/api/v1/movies?q=${text}` );
        
        dispatch({
              type:SEARCH_MOVIES,
              payload:res.data.data
          })
        };

        const setLoading = () => {
      
              dispatch({
                  type:SET_LOADING,    
              })
            };
        

    return (
        <NetfilixContext.Provider
                value={{
                    movies:state.movies,
                    metaData:state.metaData,
                    currentPage:state.currentPage,
                    movie:state.movie,
                    loading:state.loading,
                    alert:state.alert,
                    searchResult:state.searchResult,
                    getMovies,
                    getMovie,
                    searchMovies,
                    setLoading
            
                }}
            >
            {props.children}
        </NetfilixContext.Provider>
    )
}
export default NetfilixState;
