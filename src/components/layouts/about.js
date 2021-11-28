import React from 'react'
import netfilix2 from "../../img/netfilix2.jpg";
import netfilix4 from "../../img/netfilix4.jpg";
import netfilix3 from "../../img/netfilix3.jpg";
import netfilix from "../../img/net.png";
import Particles from 'react-particles-js';
import Link from 'react-router-dom';

 const About = () => {
    return (
      <>
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
       <div classnName="about-section paddingTB60 gray-bg " >
          <div className="about-container">
            <div classnName="row">
           
                    <div classnName="about-title clearfix">
                        <h1  >About <span>us</span> <span style={{float:"right"}} ><img  style={{width:"100px",height:"70px"}}  src={netfilix} alt="" /></span> </h1>

                        <br/>
                     
                        <h3>Netflix has debuted a new branding campaign in 27 countries bearing the tagline “One Story Away.” </h3>
                        <br/>
                      
                        <div className="row" >

                        <div className="col-md-4" >
                               <div classnName="about-img">
                                 <img className="rounded" style={{width:"100%",height:"400px"}} src={netfilix3} alt="" />
                               </div>
                            </div>
                            <br/>
                            <div className="col-md-4" >
                               <div classnName="about-img">
                                 <img className="rounded" style={{width:"100%",height:"400px"}} src={netfilix2} alt="" />
                               </div>
                            </div>
                            <br/>
                            <div className="col-md-4" >
                               <div classnName="about-img">
                                 <img className="rounded" style={{width:"100%",height:"400px"}} src={netfilix4} alt="" />
                               </div>
                            </div>
                            <br/>
                        </div>
                        <br/>
                        <p classnName="about-paddingB">Netflix has debuted a new branding campaign in 27 countries bearing the tagline “One Story Away.”

                        In a blog post Thursday, VP of Brand Eric Pallotta wrote, “Stories are powerful. The TV shows and films we watch bring out all sorts of different emotions, give us perspectives we’ve never seen before and even make us feel closer to each other.”

                        A YouTube spot anchoring the campaign (watch it above) uses the red “progress bar” from online videos as a visual link between shows like When They See Us and The Crown and films like Marriage Story and Roma. The vintage of the titles used in the campaign is due to the fact that the initiative has been in the works for nearly a year, well before COVID-19, which has seen the streaming giant add 26 million subscribers.</p>
                        <p>Bozoma St. John joined Netflix in June as its chief marketing officer after a two-year run at Endeavor. While “One Story Away” is not her creation, she is said to be a big supporter of it.

                        In addition to the online video, which will be localized with different voiceoverlanguages around the world, the campaign will involve outdoor billboards in cities like Toronto, London and Tokyo.

                        The phrase “one story away,” Pallotta wrote, first surfaced when one of his colleagues used it in the hallway a couple of years ago. “It’s stuck in my head ever since,” he said. “These words perfectly encapsulate the passion for storytelling that lies at the heart of what Netflix – and the creators we work with all over the world – are trying to bring to our members.”</p>
               
               <a  href="https://www.netflix.com/de-en/"><button style={{float:'right'}} type="button" class="btn btn-danger">Visit Netfilix</button> </a>

                 
                    </div>
              
              
            </div>
         </div>
      </div>
    </>
    )
}
export default About