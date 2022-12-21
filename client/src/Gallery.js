import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';

import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import axios from 'axios';
import API from './Api';
import ModalImage from "react-modal-image";
import { Lightbox } from "react-modal-image";
import { trackPromise} from 'react-promise-tracker';


const useStyles = makeStyles(theme => ({
   

   carousel:{
        display:"flex",
        flexDirection:"row",
        width:"100%",
       // maxHeight:"300px",
        height:"300px",
          //border:"solid green 1px",
         alignItems:"center",
          padding:"10px 2px",
          //margin:"5px"
          //backgroundColor:"#fff"
        
 }
    
}));



function Gallery() {
  
  const classes = useStyles();
     const [userData,setData] = useState([]);
     

    useEffect(()=>{
    
       getPhotos();

                    },[]);

    const getPhotos = async()=>{
trackPromise(

     await axios
      .get(API+"/gallery/ourgallery")
      .then((response) => {
        //console.log(response)
        let data = response.data;
         //console.log(data.data);
        setData(data.reverse());          
        
       })
         
      .catch((error) => {
        
      //  console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            //console.log(userData);

        })
    
    ); 
  }


  return (
<div > 
 <div style={{marginTop:"0px"}}><ResponsiveAppBar /> </div>                       

        <h2>Gallery</h2>


            <div>

            <div className="container" style={{}}>
            <div className="row" style={{}}>
            
{userData
.map((val) => {
        return (
            <>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 galleryImg" style={{}}>
             <div style={{padding:"0px",margin:"2px",width:"100%"}}> <ModalImage
                small={val.img}  
                large={val.img}
                hideDownload={true}
                className={classes.carousel}
                loading="lazy"
                /></div>
             { //<div> <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
               //                                   {val.description}
               //                                 </p></div>
               //                 
            }
            </div>
                </>
      );
      })
}
            
            </div>
            </div>
            </div>
  
              



<section >
        <Footer />  
        </section>


      

<a
        href="https://wa.me/919591999044"
        target="_blank"
        rel="noopener noreferrer"
                  style={{ position: "fixed", bottom: 90, right: 10, zIndex: 1000 }}

      >
                  <img className="whatsapp-icon" src="img/whatsapp.png" width="40px" />

      </a>
</div>
  );
}

export default Gallery;


// renderImages() {
//     return this.props.gallery
//       .filter((value) => {
//         if (value.category === "Our Gallery") {
//           return value;
//         }
//       })
      // .map((gallery) => {
      //   return (
      //     <div class="col-md-4 col-xs-6 my-15" key={gallery._id}>
      //       <div class="gallery-single">
      //         <a href={gallery.image}>
      //           <img src={gallery.image} alt="" />
      //           <span>
      //             <i class="fas fas-3x fa-eye"></i>
      //           </span>
      //           <h4 className="text-center text-capitalize">
      //             {gallery.thumbnail}
      //           </h4>
      //         </a>
      //       </div>
      //     </div>
      //   );
      // });
//   }


//     {<img src={val.img} height="300px" width="100%" alt="" />
                                
                                // <p className="text-center text-capitalize" style={{color:"grey",fontWeight:"500"}}>
                                //   {val.eventdate}
                                // </p>}




// <img src={val.img} height="300px" width="100%" alt="" onClick={()=>setshow(true)}/>  
//             <Lightbox
//       medium={val.img}
//       large={val.img}
//       show={show}
//       onClose={handleClose}
//     />


// import React, { Component } from 'react';
//  import { usePromiseTracker } from "react-promise-tracker";

//  const Gallery = (props) => {
//  const { promiseInProgress } = usePromiseTracker();

//   return (
//     <div>
//     {
//       (promiseInProgress === true) ?
//         <h3>Hey I'm a spinner loader wannabe !!!</h3>
//       :
//         <h1>Hello </h1>
//     }
//   </div>
//   )
// };

// export default Gallery;