import React ,{useReducer} from 'react'
import NetfilixContext from './netfilixContext';
import NetfilixReducer from './netfilixReducer';
import axios from 'axios';
import{
    GET_MOVIES,
    SEARCH_MOVIES,
    SET_LOADING,
    GET_MOVIE,
    SET_TEXT 
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
      console.log(res.data.metadata)
        dispatch({
            type:GET_MOVIES,
            payload:res.data.data,      
            payload2:res.data.metadata,     
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
            const setText = (txt) => {
                const text =txt
                dispatch({
                    type:SET_TEXT , 
                    payload:text   
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
                    text:state.text,
                    searchResult:state.searchResult,
                    getMovies,
                    getMovie,
                    searchMovies,
                    setLoading,
                    setText
            
                }}
            >
            {props.children}
        </NetfilixContext.Provider>
    )
}
export default NetfilixState;
