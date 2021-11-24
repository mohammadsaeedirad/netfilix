import React,{useContext,useEffect,useState} from 'react'
import Loading from '../layouts/Loading';
import { HashLink as Link } from 'react-router-hash-link';
import NetfilixContext from '../../cotext/netfilix/netfilixContext';
import Particles from 'react-particles-js';

 const Movie = ({match}) => {
    const netfilixContext=useContext(NetfilixContext)
    const {getMovie,movie,loading} = netfilixContext;
    useEffect(() => {
        getMovie(match.params.id);    
      
    },[]);

    const {title,poster,plot,year,country,director,actors,writer,rated,runtime}=movie;

    if(loading){
        return(
            <div className="container">
                <Loading />
            </div>
        ) 
    }else{
        return (
            <div>
                <Particles
                 
                 params={{
                   background: {
                     color: {
                       value: "rgb( 33,37,41) ",
                     },
                   },
                   fpsLimit: 60,
                   interactivity: {
                     events: {
                       onClick: {
                         enable: true,
                         mode: "push",
                       },
                       onHover: {
                         enable: true,
                         mode: "repulse",
                       },
                       resize: true,
                     },
                     modes: {
                       bubble: {
                         distance: 400,
                         duration: 2,
                         opacity: 0.8,
                         size: 40,
                       },
                       push: {
                         quantity: 4,
                       },
                       repulse: {
                         distance: 50,
                         duration: 0.4,
                       },
                     },
                   },
                   particles: {
                     color: {
                       value: "#ffffff",
                     },
                     links: {
                       color: "#dc3545",
                       distance: 150,
                       enable: true,
                       opacity: 0.5,
                       width: 1.5,
                     },
                     collisions: {
                       enable: true,
                     },
                     move: {
                       direction: "none",
                       enable: true,
                       outMode: "bounce",
                       random: false,
                       speed: 1.5,
                       straight: false,
                     },
                     number: {
                       density: {
                         enable: true,
                         value_area: 800,
                       },
                       value: 80,
                     },
                     opacity: {
                       value: 0.5,
                     },
                     shape: {
                       type: "circle",
                     },
                     size: {
                       random: true,
                       value: 5,
                     },
                   },
                   detectRetina: true,
                 }}
               />
                <div className="movie-container">
                    <div className="row" >
    
                        <div className="col-md-3" >
                             <img className="rounded movie-poster"  src={poster} alt="" />
                        </div>
    
    
                        <div className="col-md-9" style={{position:'relative'}} >
                            <h2>{title}</h2>
                            <p>{plot}</p>
                            <p >Director: <span className="badge bg-danger" >{director}</span> </p>
                        
                            <p className="overflow" >Actors: <span className="badge bg-secondary" >{actors}</span> </p>
    
                            <p className="overflow" >Writers: <span className="badge bg-secondary" >{writer}</span> </p>
    
                            <br/>
                            <span style={{marginRight:'1%'}} class="badge bg-info">{year}</span>  
                            <span style={{marginRight:'1%'}}  class="badge bg-danger">{country}</span>    
                            <span style={{marginRight:'1%'}}  class="badge bg-secondary">{runtime}</span>        
                
                            <span className="badge bg-success">{rated}</span>
                            
                        
                            <Link  to="/"><button className="movie-back-btn btn btn-danger"  type="button" >back</button> </Link>
    
                        </div>
                
                    </div>
                </div>
               
            </div>
        )
    }

 
}

export default Movie;