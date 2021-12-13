import React from 'react'
import moonLight from "../../img/Moonlight.jpeg";
import StarWars from "../../img/StarWars.jpg";
import john from "../../img/john.jpeg";
import  {useAuth}  from '../../cotext/AuthContext';
import { HashLink as Link } from 'react-router-hash-link';

 const Header = () => {

    const {currentUser} = useAuth()
   
    return (
        <div >
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <img className="bd-placeholder-img"  src={moonLight} aria-hidden="true"  focusable="false"></img>
          
                  <div className="container">
                    <div className="carousel-caption text-start" >
                      <h1>Example headline.</h1>
                      <p>Some representative placeholder content for the first slide of the carousel.</p>
                     { !currentUser && <p><Link className="btn btn-lg btn-danger" to="/signup">Sign up today</Link></p>}            
                     </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img className="bd-placeholder-img"  src={StarWars} aria-hidden="true"  focusable="false"></img>
          
                  <div className="container">
                    <div className="carousel-caption" style={{color:"white"}} >
                      <h1>Another example headline.</h1>
                      <p>Some representative placeholder content for the second slide of the carousel.</p>
                      <p><Link className="btn btn-lg btn-danger" to="/about#section">Learn more</Link></p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img className="bd-placeholder-img"  src={john} aria-hidden="true"  focusable="false"></img>
          
                  <div className="container">
                    <div className="carousel-caption text-end" >
                      <h1>One more for good measure.</h1>
                      <p>Some representative placeholder content for the third slide of this carousel.</p>
                      <p><a className="btn btn-lg btn-danger" href="#">Browse gallery</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>    
        </div>
    )
}


export default Header;