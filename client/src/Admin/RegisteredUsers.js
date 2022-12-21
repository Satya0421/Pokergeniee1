import React, { useState, useEffect,useRef} from "react";
//import {trackPromise} from 'react-promise-tracker';
//import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
//import "@fontsource/mulish";
import AdminAppbar from './AdminAppbar' ;
import CircularStatic from './CircularLoaders';
import Grid from '@mui/material/Grid';
//import { DownloadTableExcel } from 'react-export-table-to-excel';
import API from '../Api';

function RegisteredUsers() {
  const tableRef = useRef(null);
  const [isAuthenticated,setisAuthenticated] = useState(false);
  const [userData,setData] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [val, setVal] = useState();
  const navigate = useNavigate();

useEffect(()=>{
    if(!sessionStorage.regtoken){
      navigate(`/mdadmin`);
    } 

  },[]);

useEffect(()=>{
    
verify();

  },[]);

//let tableBody;
const verify = async()=>{

     await axios
      .get(API+"/trainingregistration")
      .then((response) => {
        
        let data = response.data;
         //console.log(data.data)
        setData(data.data
          .filter((valu) => {
            //console.log(typeof valu.email)
        if (search === "") {
         
          return valu;
        } else if (
          valu.phonenumber === parseInt(search)
          // || valu.email.toLowerCase() === search.toLowerCase()
          // || valu.email.toLowerCase().includes(search.toLowerCase())
        ) {
          // console.log("search")
          return valu;
        }
        //else{alert(`The result for the search value ${search} is not found`)}
      })
          .map((val,index)=>{
            const d = val.dob;
            //console.log(typeof d)
            return(
            <tr key={index} >
            <td className="td">{index + 1}</td>
            <td className="td">{val.name}</td>
            <td className="td">{val.email}</td>
            <td className="td">{val.contactnumber}</td>
            <td className="td">{val.qualification}</td>
            <td className="td">{val.passportnumber}</td>
            <td className="td">{val.traininglevel}</td>
            <td className="td">{val.date}</td>
            <td className="td">{val.address}</td>
            <td className="td">{val.time}</td>
            

          </tr>)}))
        //console.log(userData);
       
        })
        
      .catch((error) => {
        
       // console.log("An error occurred:", error.response);

       
      })
      .finally(() => {
            setLoading(false);
            setSearch("");
        })
    
   

  }

 


    return (
      
      <div style={{backgroundColor:"#fff"}}>
<div style={{width:"100%"}}>
    <AdminAppbar title={"Registered Users"}/>
    </div><br />
<section>
<div className="container">
  <Grid item xs={12} >
        <Grid    columnSpacing={{ xs: 1, sm: 2, md: 3,large:2 }} className="container1" style={{width:"100%"}}>

              <Grid item xs={12} style={{width:"100%",paddingLeft:"4px"}}>
                    
                    
                   <div style={{float:"left"}}><span><input className="form-control" type="text" name="enter" id="search" placeholder="Search By Phonenumber" value={search}  onChange={(e)=> {setSearch(e.target.value)}}/>
                    <input type="submit"  className="quiry-btn" value="Search" onClick={verify} ></input></span></div>
                                        
                          <span  style={{float:"right",marginRight:"25px"}} className="quiry-btn" >Download</span>




        </Grid>
  </Grid>
  </Grid><br />
{loading?<CircularStatic />:
    <table ref={tableRef} style={{border:"solid green 2px"}}>
                <thead style={{}}>
                  <tr style={{}}>
                    <th className="slno">Sl. No</th>
                    
                    <th scope="col" className="th">Name</th>
                    <th scope="col" className="th">Email</th>
                    <th scope="col" className="th">Phone Number</th>

                     <th scope="col" className="th">Qualification</th>
                    <th scope="col" className="th">Passport Number</th>
                    <th scope="col" className="th">Training Level</th>

                     <th scope="col" className="th">Date</th>
                    <th scope="col" className="th">Addres</th>
                    <th scope="col" className="th">Time</th>
  
                  </tr>
                </thead>
                 <tbody style={{border:"solid green 1px"}}>
      {userData}
    </tbody>
              </table>
    }

    </div>
    </section>
   </div>
   
  );
}

export default RegisteredUsers;

/*

<td><img className="activator" style={{ width: '100%', height: 200 }} src={val.passportcopy} /></td>  
                   <th scope="col">Image</th>
                   
            

*/
  