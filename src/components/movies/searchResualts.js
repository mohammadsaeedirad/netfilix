import React,{useContext,useEffect} from 'react'
import NetfilixContext from '../../cotext/netfilix/netfilixContext'
import MovieItem from './movieItem'
import arrow from "../../img/arrow.png"
import Header from '../layouts/header'
import Particles from 'react-particles-js';

const SearchResualts = () => {

    const netfilixContext =useContext(NetfilixContext)
    const {searchResult,text}=netfilixContext;
    useEffect(() => {
      console.log(text)
      
    },[])


    
    return (
        <div>
            
          <div st className="container-fluid">
            <Particles
                 
                 params={{
                   background: {
                     color: {
                       value: "#1A1A1D  ",
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
                       value:"#ffffff"
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
    </div>
        <div>
               <div  className="container movie-container">
                 <div className="row d-flex justify-content-center">             
                      <h3  id="res" > search results: <span style={{float:"right",color:"#dc3545",cursor:"pointer"}} ><img style={{width:"50px",height:"50px"}} src={arrow} alt="" /> </span> </h3>

                        { searchResult.map(res => <MovieItem id={res.id} key={res.id} movie={res} />)}
                  </div>  
              </div>
        </div>

                   
       
        </div>

    )
}

export default SearchResualts
