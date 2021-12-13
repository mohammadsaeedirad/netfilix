import React,{useContext,Fragment} from 'react'
import NetfilixContext from '../../cotext/netfilix/netfilixContext'
import MovieItem from './movieItem'
import arrow from "../../img/arrow.png"
import Header from '../layouts/header'

 const Movies = () => {
     
    const netfilixContext =useContext(NetfilixContext)
    const {movies ,searchResult,searchMovies }=netfilixContext;
   
    


        return (
            <Fragment>
                <Header />

                <div id="top"  className="container">    

              

                    <div id="top" className="row  d-flex justify-content-center"> 

                        <h1>top imdb movies, enjoy! <span style={{float:"right"}} ><img style={{width:"50px",height:"50px"}} src={arrow} alt="" /> </span> </h1>
               
                        {movies.map(movie => <MovieItem id={movie.id} key={movie.id} movie={movie} /> ) }



                    </div>
                </div>
            </Fragment>
        )
    
   
}

export default Movies;