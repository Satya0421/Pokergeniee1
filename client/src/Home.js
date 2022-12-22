import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import Collapse from 'react-bootstrap/Collapse';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';

import {TestimonialCarousel} from './Carousels/testimonial_carousel/Testimonial';
import {Videos_Carousel} from './Carousels/NewsAndEvents_Carousel';

// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import API from './Api';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import "react-awesome-slider/dist/styles.css";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);



function Home() {


  // const [inputs, setInputs] = useState({});
  const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);

const [spraysererr,setSprayserErr] =useState([]);
  const [showspray, setShowspray] = useState(false);
  const handleClosespray = () => {setShowspray(false);setSprayserErr([])};

  const handleShowspray = () => setShow(true);

  const navigate = useNavigate();


  
          const sendSprayServicesDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,
            crop: e.target.yourcrop.value,
            acre: e.target.youracres.value
          }
          //console.log(objectOb);
          await axios
                .post('http://localhost:4003/sprayservicesenquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShowspray(false);
                  //console.log(typeof response.data.contactnumber);
                  setSprayserErr([]);
                    //.log(err);
                    
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                 // console.log(error.response)
                  //setSprayserErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))
                 })
                .finally(()=>{
                  
                })
          }

          const sendEnquiryDetails=async(e)=>{
          e.preventDefault();
          let objectOb = {
            name: e.target.yourname.value,
            contactnumber: e.target.yourphone.value,
            email: e.target.youremail.value,
            message: e.target.yourtext.value,
            place: e.target.yourplace.value,

          }
          console.log(objectOb);
          await axios
                .post(API+'/enquiry', objectOb)
                .then((response) => {
                  navigate(`/`);
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  setShow(false);
                  //console.log(typeof response.data.contactnumber);
                  setErr([]);
                    //.log(err);
                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  //console.log(error.response)
                  //setErr(error.response.data.replace("enquiries validation failed:", "").split(",",20))#ECBE07
                 })
                .finally(()=>{
                  
                })


          }
 


  return (
<div style={{backgroundColor:"#fff"}}>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div> 


  
      <div className="container" style={{paddingTop:"10px"}}>
      <div className="col">
      <Carousel  indicators={false} controls={false} >
                                               


                                            <Carousel.Item interval={2000}>
                                               <img className="lazy "  src="img/poker_banner1.png" alt="img" loading="lazy"/>
                                               
                                               </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                               <img className="lazy "   src="img/poker_banner2.jpg" alt="img" loading="lazy"/>
                                               
                                               </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                               <img className="lazy "  src="img/poker_banner1.png" alt="img" loading="lazy"/>
                                               
                                               </Carousel.Item>
                                            <Carousel.Item interval={2000}>
                                               <img className="lazy "   src="img/poker_banner2.jpg" alt="img" loading="lazy"/>
                                               
                                               </Carousel.Item>

                                               
                                            </Carousel> 
{//<AutoplaySlider 
// play={true}
//     cancelOnInteraction={false}
//     interval={2000}

// animation="cubeAnimation">
//     <div data-src="/img/poker_banner1.png" />
//     <div data-src="/img/poker_banner2.jpg" />
//     <div data-src="/img/poker_banner1.png" />
//     <div data-src="/img/poker_banner2.jpg" />
//       </AutoplaySlider>
}
      </div>  
    </div> 
          {<section className="" style={{height:"inherit",}}>
                <div className="container " style={{}}>
                   <h2 style={{}}>Downloads</h2><br />
          
                  {
                  //   <div className="container">
                  //                     <ul className="row justify-content-center" style={{padding:"0px",}}>
                  //                       <li className="col-12 col-sm-12 col-md-5 justify-content-center align-self-center" style={{width:"260px",padding:"20px",textAlign:"center",}} >
                  //                         <div className="block-icon justify-content-center align-self-center" style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                  //                           <img src="windows.svg" alt="img"  /><br />
                  //                           <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>WINDOWS APP</span>
                  
                  // {                         //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"left",}}><h4 style={{display:"inline",}}>3+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Branches</h6></span></div>
                  //            }          
                  //                         </div>
                            
                  //                       </li>
                  //                        <li className="col-12 col-sm-12 col-md-5 justify-content-center align-self-center" style={{width:"260px",padding:"20px",textAlign:"center",}} >
                  //                         <div className="block-icon justify-content-center align-self-center" style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                  //                           <img src="play.svg" alt="img" /><br />
                  //                           <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>INSTANT PLAY</span>
                  
                  
                  
                  // {                          //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"justify"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Drone Variants</h6></span></div>
                  //           }          
                  //                         </div>
                  //                       </li>
                  //                        <li className="col-12 col-sm-12 col-md-5 justify-content-center align-self-center" style={{width:"260px",padding:"20px",textAlign:"center",}} >
                  //                         <div className="block-icon justify-content-center align-self-center" style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                  //                           <img src="android.svg" alt="img" /><br />
                  //                           <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>ANDROID APP</span>
                                            
                  // {
                  //                           //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>30+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Pilot</h6></span></div>
                  //           }
                  //                         </div>
                  //                       </li>
                  //                        <li className="col-12 col-sm-12 col-md-5 justify-content-center align-self-center" style={{width:"260px",padding:"20px",textAlign:"center",}} >
                  //                         <div className="block-icon justify-content-center align-self-center" style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                  //                           <img src="mac.svg" alt="img" /><br />
                  //                                                     <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>MAC APP</span>
                  //                           {//<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Technicians</h6></span></div>
                  //                                     }
                  //                         </div>
                  //                       </li>
                                        
                                        
                  //                     </ul>
                  //                     </div>
                                    }



                                    <div className="container">
                    <ul className="row " style={{padding:"0px",}}>
                      <li className="col-12 col-sm-12 col-md-5  " style={{width:"260px",padding:"20px",textAlign:"center",}} >
                        <div className="block-icon  " style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                          <img src="windows.svg" alt="img"  /><br />
                          <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>WINDOWS APP</span>

{                         //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"left",}}><h4 style={{display:"inline",}}>3+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Branches</h6></span></div>
           }          
                        </div>
          
                      </li>
                       <li className="col-12 col-sm-12 col-md-5  " style={{width:"260px",padding:"20px",textAlign:"center",}} >
                        <div className="block-icon  " style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                          <img src="play.svg" alt="img" /><br />
                          <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>INSTANT PLAY</span>



{                          //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline",textAlign:"justify"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Drone Variants</h6></span></div>
          }          
                        </div>
                      </li>
                       <li className="col-12 col-sm-12 col-md-5  " style={{width:"260px",padding:"20px",textAlign:"center",}} >
                        <div className="block-icon  " style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                          <img src="android.svg" alt="img" /><br />
                          <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>ANDROID APP</span>
                          
{
                          //<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>30+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Pilot</h6></span></div>
          }
                        </div>
                      </li>
                       <li className="col-12 col-sm-12 col-md-5  " style={{width:"260px",padding:"20px",textAlign:"center",}} >
                        <div className="block-icon justify-content-center " style={{borderRadius:"20px",width:"220px",height:"300px",}}>
                          <img src="mac.svg" alt="img" /><br />
                                                    <span style={{color:"white",paddingTop:"20px",fontWeight:"bold",fontSize:"10px"}}>MAC APP</span>
                          {//<div className="info-span" style={{color:"white",width:"100%",textAlign:"left",paddingLeft:"30%"}}><span style={{display:"inline"}}><h4 style={{display:"inline"}}>5+</h4></span> <span style={{display:"inline"}}><h6 style={{display:"inline"}}>Technicians</h6></span></div>
                                    }
                        </div>
                      </li>
                      
                      
                    </ul>
                    </div>
          </div>
              
              </section>}
    
    



<br />



        <section style={{padding:"10px",paddingTop:"0px",marginBottom:"10px"}} >
          <div className="container">
            <h2 style={{padding:"0px",margin:"0px",}}>variants</h2>
            <TestimonialCarousel page={"home"} />
          </div>
        </section>
<section style={{}}>
         <Footer />
        </section>
        <a
        href="https://wa.me/918904095588"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: "10px", zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a> 
  
         

</div>
  );
}

export default Home;



// {  
// <Carousel  indicators={false} controls={false} >
                                               


//                                             <Carousel.Item interval={2000}>
//                                                <img className="lazy "  src="img/poker_banner1.png" alt="img" loading="lazy"/>
                                               
//                                                </Carousel.Item>
//                                             <Carousel.Item interval={2000}>
//                                                <img className="lazy "   src="img/poker_banner2.jpg" alt="img" loading="lazy"/>
                                               
//                                                </Carousel.Item>
//                                             <Carousel.Item interval={2000}>
//                                                <img className="lazy "  src="img/poker_banner1.png" alt="img" loading="lazy"/>
                                               
//                                                </Carousel.Item>
//                                             <Carousel.Item interval={2000}>
//                                                <img className="lazy "   src="img/poker_banner2.jpg" alt="img" loading="lazy"/>
                                               
//                                                </Carousel.Item>

                                               
//                                             </Carousel> 
// }