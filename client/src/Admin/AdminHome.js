import React, {useState, useEffect} from 'react';
import AdminAppbar from './AdminAppbar' ;
import AdminLogin from './AdminLogin'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

function AdminHome(){
	const [isAuthenticated,setisAuthenticated] = useState(false);
	const navigate = useNavigate();
useEffect(()=>{
    if(!sessionStorage.regtoken){
    	navigate(`/mdadmin`);
    } else{
    		        // toast.success("Successfully Verified!",{position: "top-center"});

    	return;}

  },[]);
		





	return (
		<div style={{backgroundColor:"#fff"}}>
		<div style={{width:"100%"}}>
		<AdminAppbar title={"AdminPanel"}/>
		</div><br />
		<div  className="container" style={{}}>
		<div>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/registeredusers')}}>Get Registered Users</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/addtestimonials')}}>Testimonials</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/addgallery')}}>Gallery</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/addyoutubelinks')}}>YouTube-Links</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/getCatlogsDownloaders')}}>CatlogDownloaders</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/addjobvacancies')}}>Post Jobs</button></span>
				<span style={{float:"left",padding:"10px"}}><button  sx={{ }} className="quiry-btn" onClick = {()=>{navigate('/getjobapplicants')}}>Get Applicants</button></span>
		
		</div>
		</div>
		 <ToastContainer />
		</div>
);
}
export default AdminHome;


// <div style={{paddingLeft:"33%",paddingRight:"33%"}}>
// 		<span style={{float:"left"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {RegisteredUsers}>Get RegisteredUsers</Button></span>
// 		<span style={{float:"right"}}><Button  sx={{ backgroundColor:"#CFA660",color:"black" }} onClick = {TransactionDetails}>Get TransactionDetails</Button></span>

// 		</div><br />