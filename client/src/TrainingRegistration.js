import React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import ResponsiveAppBar from './AppBar'; 
import Footer from './Footer';

import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; // import first
import { ToastContainer, toast } from 'react-toastify'; // then this
import { useNavigate } from 'react-router-dom';
import API from './Api';
import Modal from 'react-bootstrap/Modal';
import {makeStyles} from "@material-ui/styles";
import { ClassNames } from '@emotion/react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Form from 'react-bootstrap/Form';
import FormHelperText from '@mui/material/FormHelperText';

const useStyles = makeStyles(theme => ({
    con:{
        backgroundColor: '#fff !important',
        width:"100%",
        '&:hover': {
      backgroundColor: 'green !important',
      color: '#fff'
    },
        '&:checked':{
            backgroundColor: 'green !important',
      color: '#fff'
        }
    },
    select: {
      backgroundColor:"#fff",
      marginBottom:"0px",
      borderRadius:"0px",
      '& > fieldset': { border: 'none',marginBottom:"0px" },
      "& .MuiSelect-select": {
      padding: "10px",
      boxShadow:"0px"
    }
  },
   }));



function TrainingRegistration() {
    const classes = useStyles();
 const [file,setfile]=useState([])
 const [item, setItem] = useState(null);

 const [traininglevel, setTraininglevel] =useState();
 const [showNote,setShowNote] = useState(true);
 const [indian,setIndian] = useState(false);
 const [eligibility,setEligibility] = useState(false);

useEffect(() => {
    
      window.scrollTo(0, 0);
      //setShowFalse();
   
  }, []);

const encodeImageFileAsURL=(e)=> {
    e.preventDefault();
    
     let file = e.target.files[0];
    let reader = new FileReader();
    
    reader.onloadend = function() {
        //console.log(typeof reader.result)
        setItem(reader.result);

    }
    reader.readAsDataURL(file);
    //console.log(item)
}
const RegisteredDetails=async(e)=>{
  e.preventDefault(0);
  let objectOb={
    name:e.target.name.value,
    email:e.target.email.value ,
    contactnumber:e.target.phone.value ,
    address:e.target.address.value,
    qualification:e.target.qualification.value ,
    passportnumber:e.target.passportNumber.value,
    traininglevel:traininglevel,
    passportcopy:item,
  }
 // console.log(e.target.file1.value);
setfile([item])
//console.log(item)
  console.log(objectOb);
  // alert("got it");
  await axios
                .post(API+'/trainingregistration', objectOb)
                .then((response) => {
                  
                  toast.success("Successfully Enquiry Submitted.",{position: "top-center",});
                  //console.log(response.data);
                  setfile([response.data.passportcopy]);
                    e.target.name.value = "" ;
                    e.target.email.value = "" ;
                    e.target.phone.value = "" ;
                    e.target.address.value= "" ;
                    e.target.qualification.value = "" ;
                    e.target.passportNumber.value= "" ;
                    e.target.training_level.value= "" ;
                    e.target.specialization.value= "" ;
                    e.target.file1.value = "";

                })
                .catch((error) => {
                  //console.log("err",error.response.data.replace("enquiries validation failed:", "").split(",",20));
                  console.log(error.response)
               
                 })
                .finally(()=>{
                  
                })
}

// const setShowFalse=()=>{
    
//     alert("clicked")
//         let citizen = indian; 
//         let eligible = eligibility;
//                 if(citizen == "Yes"&eligible=="Yes"){
//             setShowNote(false);
//             alert("true");
//         } else{
//             setShowNote(true);
//             alert("false");
//         }
// }


  return (
    <div className="">
    <ResponsiveAppBar/>


<div className="container">
             
            
{indian & eligibility?
 
                <div className="row py-4 justify-content-center">
                    <div className="col-lg-11">
                        <div className="featured-box featured-box-primary text-left mt-0" style={{backgroundColor: "gainsboro",paddingBottom:"10px"}}>
                            <div className="box-content">

                                <div className="overflow-hidden mb-1">
                                    <h2 className="font-weight-normal text-7 mt-2 mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200"><strong className="font-weight-extra-bold">Register For Training</strong></h2>
                                </div>

                                <form id="contactForm" className="contact-form" onSubmit={RegisteredDetails}  encType="multipart/form-data" style={{margin:"20px",textAlign:"justify",color:"black",padding:"10px"}}>
                                    

                                    <div className="form-row row">
                                      <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2" style={{}}>Full Name</label>
                                            <input type="text"   maxLength="100" className="form-control" name="name" id="name" pattern="^[a-zA-z]+([\s][a-zA-Z]+)*$" required title="Please Enter only Alphabets without any numbers and special characters" style={{color:"black",padding:"10px",backgroundColor:"#fff"}} />
                                        </div>
                                        <div className="form-group col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2">Email Address</label>
                                            <input type="email"    maxLength="100" className="form-control" name="email" id="email" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}} />
                                        </div>
                                        <div className="form-group  col-sm-4 col-md-4 col-lg-4">
                                            <label className="required font-weight-bold text-dark text-2">Phone</label>
                                            <input type="tel"   maxLength="10" pattern="[0-9]{10}" className="form-control" name="phone" id="phone" pattern="[0-9]{10}"  required title="Please Enter Valid Number" style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-12">
                                            <label className="required font-weight-bold text-dark text-2">Address</label>
                                            <textarea maxLength="5000" rows="8" className="form-control" name="address" id="address" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}}></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Highest Qualification</label>
                                            <input type="text"   maxLength="100" className="form-control" name="qualification" id="qualification" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                        </div>
                                       <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Specialization</label>
                                            <input type="text"   maxLength="100" className="form-control" name="specialization" id="specialization" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                        </div>
                                    </div>
                                    <div className="form-row row">
                                        <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Passport Number</label>
                                            <input type="text"  maxLength="100" className="form-control" name="passportNumber" id="passportnumber" required style={{color:"black",padding:"10px",backgroundColor:"#fff"}}/>
                                        </div>
                                         <div className="form-group col-sm-6 col-md-6 col-lg-6">
                                            <label className="required font-weight-bold text-dark text-2">Upload Your Passport Copy</label><br />
                                            
                                              <input type="file" id ="inputFileToLoad" className="form-control" name="file1" onInput={encodeImageFileAsURL} />
                                              <h6 className="passportmandatory"><b style={{color:"black"}}>Indian Passport is mandatory as per Drone Rules 2021</b></h6>
                                        </div>
                                           
                                    </div>
 {

//                                     <div className="form-row row">
//                                         <div className="form-group col">
//                                             <label className="required font-weight-bold text-dark text-2">Training Level</label>
//                                             <select className="form-control selector"  id="training_level" style={{backgroundColor:"#fff",padding:"0px"}} required >
//                                                 <option disabled selected>Select a Training Level</option>
//                                                 <option value="Multirotor Drone Pilot Course" className={classes.con}>Multirotor Drone Pilot Course </option>
//                                                 <option value="Agriculture Drone Pilot Course" className="training-level-option" style={{visibility:"hidden"}}> Agriculture drone pilot course </option>
//                                             </select>
//                                         </div>
//                                     </div>
                                }

                                     <div className="form-row row">
                                        <div className="form-group col">
                                        <label className="required font-weight-bold text-dark text-2">Training Level</label>
                                    <Select
                                        className={classes.select} style={{backgroundColor:"#fff",padding:"0px",height:"50px",border:"none",borderRadius:"0px",width:"inherit"}} 
                                        name="training_level"
                                        value={traininglevel}
                                        onChange={e => {setTraininglevel(e.target.value)}}
                                        displayEmpty
                                        
                                            >
                                            <MenuItem disabled><em>Select a Training Level</em></MenuItem>
                                            <MenuItem value="Multirotor Drone Pilot Course" className={classes.con}>Multirotor Drone Pilot Course </MenuItem>
            
                                    </Select></div>
                                    </div>
                                      <br />
                                    <div className="form-row row">
                                        <div className="form-group col">
                                            <button type="submit" name="submit" className="quiry-btn" value="Book Now" data-loading-text="Loading...">Book Now</button>
                                        </div>
                                    </div>
                                </form>

                                 
                                  
                              

                                <div className="mt-4" style={{textAlign:"justify",margin:"20px"}}>
                                    <h5 className="required  text-dark text-1">Eligibility :</h5>
                                    <ul style={{listStyleType: "decimal"}} className="productinfo-p">
                                        <li className="text-dark">Age should be 18 -65 Years </li>
                                        <li className="text-dark">Should have completed 10th from recognized university </li>
                                    </ul>
                                </div>
                                <div className="" style={{textAlign:"justify",margin:"20px"}}>
                                                                    <h5 className="required  text-dark text-1">Accommodation :</h5>
                                                                 <ul style={{listStyleType: "decimal"}} className="productinfo-p">
                                                                        <li className="text-dark">Accommodation available (350 INR/head) <a href="#" className=""  data-bs-toggle="modal" data-bs-target="#viewroom" style={{textDecoration:"none",color:"green",fontStyle:"italic"}}><b><i>View Rooms</i></b></a></li>
                                                                        <li className="text-dark">Any valid government ID card is compulsory (ex: aadhar, voter ID, passport etc.)</li>
                                                                    </ul>
                                                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                :
                <div className="row py-4 justify-content-center">
            <div className="col-lg-11" style={{backgroundColor: "gainsboro",paddingBottom:"10px"}}>
            <div className="container">
        <h2>training registration</h2>
        

        <div className="overviewtitle">
          <h5 style={{color: '#1da912', align: 'center'}}>Eligibility : </h5 >
          
        </div>
<div className="" style={{textAlign:"justify"}}>
<ul className="productinfo-p" style={{listStyleType: "decimal"}}>
                                        <li className="text-dark">Age should be 18 -65 Years </li>
                                        <li className="text-dark">Should have completed 10th from recognized university </li>
                                        <li className="text-dark"><b>Indian Passport is mandatory as per Drone Rules 2021</b><br />
                                        (https://egazette.nic.in/WriteReadData/2021/229221.pdf)
                                        </li>
 </ul>         
</div>        


<div className="overviewtitle">
          <h5 style={{color: '#1da912', align: 'center'}}>Training Queries</h5 >
          
        </div>
<div className="" style={{textAlign:"justify"}}>
<ul className="productinfo-p" style={{listStyleType: "decimal"}}>
                                        <li className="text-dark">Are you a citizen of India?</li>
                                        <input type="radio"  name="indiancitizen"  value="Yes" onClick={(e)=>{setIndian(true)}}/>
                                         <label for="html">Yes</label><br />
                                         <input type="radio"  name="indiancitizen" value="No" onClick={(e)=>{setIndian(false);}}/>
                                         <label for="css">NO</label><br />
                                        <li className="text-dark">Do you have the <b>Indian Passport</b>?</li>
                                        <input type="radio"  name="eligibility" value="Yes" onClick={(e)=>{setEligibility(true)}}/>
                                         <label for="html">Yes</label><br />
                                         <input type="radio"  name="eligibility" value="No" onClick={(e)=>{setEligibility(false);}}/>
                                         <label for="css">NO</label><br />

 </ul>         
</div>     
                                                  
        
             </div>

             </div>
            </div>

}




               
                


            </div>
        

 <div id="dummy">
    </div>

    
     <Footer />



     <div className="modal fade" id="viewroom" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",backgroundColor:"hsl(0, 0%, 0%, 0)",borderRadius:"0px"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{maxWidth:"400px",minWidth:"100px",borderRadius:"0px"}}>//#efefef
    <div className="modal-content" style={{borderRadius:"0px"}}>
      <div className="modal-header" style={{borderRadius:"0px"}}>
        <h4 className="heading-main">Rooms</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                
                <img src='img/room.png' height = "300px" width="100%" alt="" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",borderRadius:"0px",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>


      </div>
   
  );
}

export default TrainingRegistration;







        //            <img className="lazy" src="img/img-2.jpg" alt="img" />
