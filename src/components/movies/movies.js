import React,{useContext,useEffect,Fragment} from 'react'
import NetfilixContext from '../../cotext/netfilix/netfilixContext'
import MovieItem from './movieItem'
import Pagination from '../layouts/Pagination'
import arrow from "../../img/arrow.png"
import Header from '../layouts/header'

 const Movies = () => {
     
    const netfilixContext =useContext(NetfilixContext)
    const {movies ,searchResult,searchMovies,getMovies }=netfilixContext;
    console.log(searchResult)
    const deleteSearch = () =>{
        searchMovies()
    }
  
    useEffect(() => {     
        getMovies()  
    },[]);
        return (
            <Fragment>
                <Header />
                
                <div id="top"  className="container">    

                   {searchResult !=false && <div className="row">             
                        <h1>search results: <span onClick={deleteSearch} style={{float:"right",color:"#dc3545",cursor:"pointer"}} >clear<img style={{width:"50px",height:"50px"}} src={arrow} alt="" /> </span> </h1>
                    
                        { searchResult.map(res => <MovieItem id={res.id} key={res.id} movie={res} />)}
                    </div>  }

                    <div id="homeTop" className="row  d-flex justify-content-center"> 
                        
                        <h1>top imdb movies, enjoy! <span style={{float:"right"}} ><img style={{width:"50px",height:"50px"}} src={arrow} alt="" /> </span> </h1>
               
                        {movies.map(movie => <MovieItem id={movie.id} key={movie.id} movie={movie} /> ) }

                    
                    </div>
                    <Pagination />
                </div>
            </Fragment>
        )
    
   
}

export default Movies;