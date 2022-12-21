import React, { useState ,useEffect,useMemo} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import API from './Api'; 

import Footer from './Footer';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import {TestimonialCarousel} from './Carousels/testimonial_carousel/Testimonial';
import {Videos_Carousel} from './Carousels/NewsAndEvents_Carousel';


function Training() {
const [err,setErr] =useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setErr([])};
  const handleShow = () => setShow(true);
  
      const navigate = useNavigate();

const [userData,setData] = useState([]);
const [youtubeData,setyoutubeData] = useState([]);
     

    useEffect(()=>{
    
       getPhotos();
       //getYoutubeLinks();
       //console.log('i fire once');
                    },[]);


    const getPhotos = async()=>{

     await axios
      .get(API+"/gallery/training")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data[3].eventdate);
        setData(data.reverse());
               
        
       })
         
      .catch((error) => {
        
      //  console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            //console.log(userData);

        })
    
   
  }

  // const getYoutubeLinks = async()=>{

  //    await axios
  //     .get(API+"/iframelinks/training")
  //     .then((response) => {
  //       //console.log(response)
  //       let data = response.data;
  //        //console.log(data[3].eventdate);
  //       const arr = [];
  //         //if(data.length > 5){
  //           // for (var i = 5; i<=data.length; i++) {

  //           //  const removed = data.reverse().pop();
  //           //  console.log()
  //           //  arr.push(removed._id);
  //           // }
            
  //           setyoutubeData(data.reverse());
  //           //alert("yes")
  //           //console.log(data);
  //           //console.log(arr)
  //         //}     
        
  //         //deleteLinks(arr);
  //      })
         
  //     .catch((error) => {
        
  //     //  console.log("An error occurred:", error.response);

       
  //     })
  //     .finally(() => {
  //           //console.log(userData);

  //       })
    
   
  // }

  const deleteLinks=async(arr)=>{

    await axios
    .post(API+"/iframelinks/delete",arr)
         .then((res)=>{
            console.log(res)

         }).catch((error) => {
        
      //  console.log("An error occurred:", error.response);

       
      })
  }
  
  return (
<div>                           
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       
 
<section className="s-we-offer">
      <div className="container">
        <h2>training</h2>
        <div className="productinfo" style={{marginBottom:"20px"}}>
          <h6 className=" training-des" style={{color: "#000", fontWeight:"bold"}}>DGCA CERTIFIED TRAINING | COURSE IS FORMULATED AS PER DGCA DTC 02 of 2022</h6>
        </div>

        <div className="overviewtitle">
          <p style={{color: '#1da912', align: 'center'}}>Objectives of the Training</p>
          
        </div>
        <div className="" style={{textAlign:"justify"}}>
          <p className="productinfo-p" >• To promote the use of drones in various industries for various applications
            <br />
            • To understand facilities and services available in the drone industry
            <br />
            • To bring awareness about regulations and facts among engineers, journalists, survey professionals, power industry professionals, police, mining industry professionals, infrastructure and agriculture professionals, etc
            <br />
            • To educate about the emerging trends in the drone industry and developing technologies in drone production
            <br />
            • To know how to have more ROIs (Return on Investments) using drones
            <br />
            • To learn how to fly a Multirotor drone
          </p>
        </div>
        

        <div className="overviewtitle">
          <p className="color: #1da912;">What Students Will Get</p>
          
        </div>
      
        
      <div className=""style={{textAlign:"justify"}}>
                  <p className="productinfo-p">• DGCA-certified Remote Pilot Certificate
                    <br />
                    • Validity – 10 years 
                    <br />
                    • Certification – DGCA 
                  </p>
                  </div>
        </div>
    </section>
   
    <section className="s-shop">
      <div className="container s-anim">
        <h2>Who Should Attend</h2>
 {     // <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmmpor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
}
        <div className="tab-wrap" >
          <ul className="tab-nav prod-tabs" style={{padding:"0px"}}>
            <li className="item" rel="tab1" >
              <div className="block-icon">
                <img src="img/photographer.svg" alt="img" />
                <h6>Photography <br />Professionals</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Professional Photographers</h6></div>

              </div>
            </li>
            <li className="item" rel="tab2">
              <div className="block-icon">
                <img src="img/engineer.svg" alt="img" />
                <h6>Passionate Engineers</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Passionate Engineers</h6></div>

              </div>
            </li>
            <li className="item" rel="tab3">
              <div className="block-icon">
                <img src="img/forest.svg" alt="img" />
                <h6>Forest/Corporate Officers</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Forest/Corporate Officers</h6></div>
              </div>
            </li>
            <li className="item" rel="tab4">
              <div className="block-icon">
                <img src="img/logistic.svg" alt="img" />
                <h6>Logistic  Experts</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Logistic Experts</h6></div>
              </div>
            </li>
            <li className="item" rel="tab5">
              <div className="block-icon">
                <img src="img/builder.svg" alt="img" />
                <h6>Builders/Survey Officers</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Builders/Survey Officers</h6></div>
              </div>
            </li>
            <li className="item" rel="tab6">
              <div className="block-icon">
                <img src="img/dronepilot.svg" alt="img" />
                <h6>Amateur Drone Pilots</h6>
                <div className="info-span training-block-icon" style={{color:"white",width:"100%",textAlign:"left",}}> <h6 style={{display:"inline-block",fontSize:"10px"}}>Amateur Drone Pilots</h6></div>
              </div>
            </li>
          </ul>
          </div>

       </div>   
    </section>

<section className="s-banners" style={{paddingTop:"0px",}}>
      <div className="container s-anim" style={{marginBottom:"5%"}}>
        <h2>courses offered</h2>
        <div className="container" >
          <div className="row" >

          <div className="col-12 col-sm-12 col-md-8 train-banner">
                           <div className="baner-item">
                             <img src="img/smallcategory.jpg" alt="img" />
                             <div className="baner-item-content" style={{paddingBottom:"0px"}}>
                               <h4 className="training-headingh4" >Multirotor Drone Pilot Course</h4>
                              
                               <p className="productinfo-p course-detail" style={{fontWeight:"400",textAlign:"justify",}}>Detailed teaching of technical aspects of drone, simulation,explanation of DGCA regulations and drone pilot training.</p>
                              
                               <a href="#" data-bs-toggle="modal" data-bs-target="#modal1" className="quiry-btn">read more</a>
                               <div className="banner-sale-cover" style={{paddingBottom:"0px"}}>
                                 <h4 className="training-headingh4" style={{fontStyle:"italic",paddingTop:"10px"}}>Fees: 60,000 + 18% GST</h4>
                                 <p className="productinfo-p" style={{paddingBottom:"0px",marginBottom:"0px"}}>Duration: 6 Days</p>
                               </div>
                             </div>
                           </div>
                         </div>
             
           {//<div className="col-12 col-sm-12 col-md-6 train-banner">
            //               <div className="baner-item">
            //                 <img src="img/smallcategory.jpg" alt="img" />
            //                 <div className="baner-item-content" style={{paddingBottom:"0px"}}>
            //                   <h4 className="training-headingh4" >Multirotor Drone Pilot Course</h4>
                              
            //                   <p className="productinfo-p" style={{fontWeight:"400",textAlign:"justify",}}>Detailed teaching of technical aspects of drone, simulation,explanation of DGCA regulations and drone pilot training.</p>
                              
            //                   <a href="#" data-bs-toggle="modal" data-bs-target="#modal1" className="quiry-btn">read more</a>
            //                   <div className="banner-sale-cover" style={{paddingBottom:"0px"}}>
            //                     <h4 className="training-headingh4" style={{fontStyle:"italic",paddingTop:"10px"}}>Fees: 60,000 + 18% GST</h4>
            //                     <p className="productinfo-p" style={{paddingBottom:"0px",marginBottom:"0px"}}>Duration: 6 Days</p>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
            //             <div className="col-12 col-sm-12 col-md-6 train-banner">
            //               <div className="baner-item">
            //                 <img src="img/agriculturetrancourse.jpg" alt="img" />
            //                 <div className="baner-item-content" style={{paddingBottom:"0px"}}>
            //                   <h4 className="training-headingh4">Agricultural Drone Pilot Course</h4>
                              
            //                   <p className="productinfo-p" style={{fontWeight:"400",textAlign:"justify",}}>Course is enriched with technical aspects of drone, in detail explanation of DGCA regulations, simulation training and drone pilot training.</p>
            //                   <a href="#" data-bs-toggle="modal" data-bs-target="#modal2" className="quiry-btn">read more</a>
            //                   <div className="banner-sale-cover" style={{paddingBottom:"0px"}}>
            //                   <h4 className="training-headingh4" style={{fontStyle:"italic",paddingTop:"10px"}}>Fees: 60,000 + 18% GST</h4>
            //                     <p className="productinfo-p" style={{paddingBottom:"0px",marginBottom:"0px"}}>Duration: 7 Days</p>
            //                   </div>
            //                 </div>
            //               </div>
            //             </div>
           }
            
          </div>
        </div>
      </div>
    </section>

<section className="s-team" style={{paddingTop:"0px",paddingBottom:"10px"}}>
      
        <h2>our instructors</h2>
 
       



<div className='container'>
 <div className="row">
                 <div className="col-8 col-sm-6 col-md-3 col-xl-3 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/ShivakumarHG1.jpg"  alt="" height="inherit" style={{width:"100%",height: "inherit"}}/>
                     </div>
                     <div className="team-info">
                       <h6 className="name">Shivakumar H G</h6>
                       <div className="prof" style={{fontWeight:"700"}}>Head (Technical & Operations), DGCA Certified RPI & RPC</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-3 col-xl-3 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/AdityaAR.png" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Adithya AR</h6>
                       <div className="prof" style={{fontWeight:"700"}}>Assistant Manager,Fleet Operations, DGCA Certified RPI & RPC</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-3 col-xl-3 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/AnupKumar.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Anup Kumar Yemme</h6>
                       <div className="prof" style={{fontWeight:"700"}}>Assistant Manager,Product Development, DGCA Certified RPI & RPC</div>
                     </div>
                   </div>
                 </div>
                 <div className="col-8 col-sm-6 col-md-3 col-xl-3 team-item-cover instructors">
                   <div className="team-item instructors-team">
                     <div className="team-img">
                       <img src="img/Mithun.jpg" alt="" />
                     </div>
                     <div className="team-info">
                       <h6 className="name">Mithun SK</h6>
                       <div className="prof" style={{fontWeight:"700"}}>Manager-NPD, DGCA Certified RPI & RPC</div>
                     </div>
                   </div>
                 </div>
                 
                 
                
         </div>
         </div>


      
    </section>
    <div className="container" style={{}}>
    <div className="row">
    <h6 style={{color:"black"}}>Multiplex Drone Multirotor Drone Training Centre</h6>
    <div className="col-10  map" style={{}}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8562395122153!2d77.35481141464605!3d13.044821290807855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae31fdf6fe7f67%3A0xae2ce345ca8af144!2sMultiplex%20Drone%20Multirotor%20Drone%20Pilot%20Training%20Centre!5e0!3m2!1sen!2sin!4v1667621531451!5m2!1sen!2sin"
                width="100%"
                
                 style={{border:"solid green 1px",padding:"6px"}}
              ></iframe>
            </div>
            </div>
            </div>
            <br />
    



            <section>
<div className="container" style={{display:"none"}}>
<div style={{padding:"10px",paddingLeft:"10px",paddingRight:"10px",backgroundColor:"none"}}>
<div style={{}}>
<div className="row text-center pb-5" style={{marginRight:"5px",marginLeft:"5px"}}>

                            <div className="col-12" >
                                <div className="overflow-hidden mb-3">
                                    <h2 className="" >

                                        <span style={{color:"black"}}>Photos</span>
                                    </h2>
                                </div>
                                </div>


<div className="col-md-5 col-lg-5" style={{}}>
                                            <h4 style={{color:"black"}}>2021 Batch</h4>
                                            <Carousel  indicators={false} controls={false} >
                                               

{
        userData.filter((valu)=>{

           
          let eventYear = valu.eventdate.split('/')[2] ;

          
            if(eventYear === '2021'){
              return valu;
            }

        })

        .map((val,index)=>{
          //console.log(val);
          let eventDay= val.eventdate.split('/')[1] ;
          let eventYear = val.eventdate.split('/')[2] ;

          let eventMonth = val.eventdate.split('/')[0] ;
          var month = ['January', 'February', 'March',
             'April', 'May', 'June', 'July',
             'August', 'September', 'October',
             'November', 'December'
            ][eventMonth-1].slice(0,3) || '';
            //console.log(val.eventdate)
          
            return(
                                            <Carousel.Item interval={1000}>
                                               <img className="lazy d-block w-100" height="320px" src={val.img} alt="img" loading="lazy"/>
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "100%"}}><b>{month}{eventYear}</b></div> 
                                               </Carousel.Item>

          );
        })

        }
                                

                                               
                                            </Carousel> 
                                      </div>
                                    
                                      <div className="col-md-5 col-lg-5" style={{paddingBottom:"10px"}}>
                                            <h4 style={{color:"black"}}>2022 Batch</h4>
                                            <Carousel  indicators={false} controls={false} style={{height:"100%"}}>
                                               

{
        userData.filter((valu)=>{

             
          let eventYear = valu.eventdate.split('/')[2] ;

          
            if(eventYear === '2022'){
              return valu;
            }

        })

        .map((val,index)=>{
          //console.log(val);
          let eventDay= val.eventdate.split('/')[1] ;
          let eventYear = val.eventdate.split('/')[2] ;

          let eventMonth = val.eventdate.split('/')[0] ;
          var month = ['January', 'February', 'March',
             'April', 'May', 'June', 'July',
             'August', 'September', 'October',
             'November', 'December'
            ][eventMonth-1].slice(0,3) || '';
            //console.log(val.eventdate)
          
            return(
                                            <Carousel.Item interval={1000} style={{height:"100%",}}>
                                               <img className="lazy d-block w-100" src={val.img} height="320px" alt="img" loading="lazy"/>
                                               <div className="text-dark text-4 bg-light" style={{position: "absolute", bottom: "0px",  width: "inherit"}}><b>{month}{eventYear}</b></div> 
                                               </Carousel.Item>

          );
        })

        }
                                

                                               
                                            </Carousel> 
                                      </div>
                                    


                            
                        </div>
                  </div>
</div>


</div>
</section>



<section style={{display:"none"}}>
<div className="container">
                            
                                <h2 className="trainifeedback" style={{padding:"0px"}}>
                                        Our Training FeedBack
                                    </h2>
                                <Videos_Carousel page={"training"} />
                                

                            

 </div>
        </section>

    <section style={{padding:"10px",display:"none"}} >
          <div className="container ">
            <h2 style={{padding:"0px",}}>testimonials</h2>
            <TestimonialCarousel page={"training"} />
          </div>
        </section>
 


<section >
        <Footer />  
        </section>

 <ToastContainer />

<a
        href="https://wa.me/916362900041"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>

 {
  // ------Modals start------
  }
<div className="modal fade" id="modal2" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Drone Pilot Training</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <h2 className=" font-weight-bold text-capitalize headingh2" style={{padding:"0px",}}>Agricultural Drone Pilot Course</h2>
                                           
      <img src='img/agriculturetrancourse.jpg' style={{width:"100%"}}/><br /><br />



                             
                        <p className="text-justify"><b>Course Highlights</b> <br />Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>

                       <p> <b>Duration :</b> 7 Days<br />
                        <b>Fees :</b> 60,000 + 18% GST<br />
                        <b>Training Queries :</b><i className="fa fa-phone" aria-hidden="true" style={{margin:" 0px 10px"}}></i><span>6362900041</span> </p>
                        
                        <h4 className="" style={{color:"black"}}>Syllabus covered</h4>
                        <table className="table table-striped table-bordered">

                            <thead className="text-white" style={{backgroundColor:"#1da912"}}>
                                <tr>
                                    <th>Day</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 1</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Regulations of DGCA</p>
                                        <p className="text-dark font-weight-bold mb-2">Basic principles of Flight </p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Multirotor</p>
                                        <p className="text-dark font-weight-bold mb-2">Drone Equipment Maintenance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 2</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Emergency Identification and Handling</p>
                                        <p className="text-dark font-weight-bold mb-2">Payload Installation and Utilization</p>
                                        <p className="text-dark font-weight-bold mb-2">Image and Video Interpretation</p>
                                        <p className="text-dark font-weight-bold mb-2">Introduction to Flight Simulator</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 3</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Flight Simulator Training</p>
                                        <p className="text-dark font-weight-bold mb-2">Assembling and De-assembling of Drones</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 4</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Practical Flying with Instructor Supervision</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 5</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Solo Flying </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 6</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Agriculture Drone Flying</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 7</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Final Test (Theory and Practical)</p>
                                    </td>
                                </tr>
                            </tbody>
            </table>

<h4>Certificate</h4>
            <p className=" text-justify productinfo-p">At the end of the Training Course, a certificate will be presented to the participants who have attended all the sessions of the Training Course. The certificate will be entitled as  <b>"Course Completion Certificate"</b></p>
                    <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  style={{background:"green"}} onClick={()=>{navigate("/trainingregistering")}}>Enroll Now</button>

                    </div>
                    </div>
                    
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="modal1" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"100%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"55%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Drone Pilot Training</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <h2 className=" font-weight-bold text-capitalize headingh2" style={{padding:"10px",}}>Multirotor Drone Pilot Course</h2><br />
                                           
      <img src='img/smallcategory.jpg' style={{width:"100%"}}/><br /><br />



                             
                        <p className="text-justify"><b>Course Highlights</b> <br />Detailed teaching of technical aspects of drone, simulation, regulations and drone pilot training.</p>

                       <p> <b>Duration :</b> 6 Days<br />
                        <b>Fees :</b> 60,000 + 18% GST<br />
                        <b>Training Queries :</b><i className="fa fa-phone" aria-hidden="true" style={{margin:" 0px 10px"}}></i><span>6362900041</span> </p>
                        
                        <h4 className="" style={{color:"black"}}>Syllabus covered</h4>
                        <table className="table table-striped table-bordered">

                            <thead className="text-white" style={{backgroundColor:"#1da912"}}>
                                <tr>
                                    <th>Day</th>
                                    <th>Program</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 1</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Stakeholders & their laws [Basic] Drone Rules 2021</p>
                                        <p className="text-dark font-weight-bold mb-2">Basic principles of Flight </p>
                                        <p className="text-dark font-weight-bold mb-2">ATC procedures & Radio Telephony (non FRTOL)</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 2</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Fixed-wing Operations and Aerodynamics</p>
                                        <p className="text-dark font-weight-bold mb-2">Rotorcraft Operations and Aerodynamics</p>
                                        <p className="text-dark font-weight-bold mb-2">Hybrid Operations and Aerodynamics</p>
                                        <p className="text-dark font-weight-bold mb-2">Weather and Meteorology</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 3</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold mb-2">Drone Equipment Maintenance</p>
                                        <p className="text-dark font-weight-bold mb-2">Risk Assessment & Analysis - Safety Management / TEM</p>
                                        <p className="text-dark font-weight-bold mb-2">Payload, Installation and Utilization</p>
                                        <p className="text-dark font-weight-bold mb-2">Intro to Drone Data & Analysis</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 4</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Final Test – Theory </p>
                                        <p className="text-dark font-weight-bold">Flight simulator training </p>
                                        <p className="text-dark font-weight-bold">Basic Assembly and Maintenance</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 5</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Practical flying with instructor / Solo flying </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-dark font-weight-bold">Day 6</p>
                                    </td>
                                    <td>
                                        <p className="text-dark font-weight-bold">Practical flying with instructor / Solo flying </p>
                                    </td>
                                </tr>
                                   
                            </tbody>
            </table>

<h4>Certificate</h4>
            <p className=" text-justify productinfo-p">At the end of the Training Course, a certificate will be presented to the participants who have attended all the sessions of the Training Course. The certificate will be entitled as  <b>"Course Completion Certificate"</b></p>
                    <div style={{textAlign:"center"}}>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"  style={{background:"green"}} onClick={()=>{navigate("/trainingregistering")}}>Enroll Now</button>

                    </div>
                    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



</div>
  );
}

export default Training;

///#282b32 #1da912
