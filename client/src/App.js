import React,{useState,useCallback} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterApp from './Routes';
import Home from "./Home";
import ScrollToTop from "react-scroll-to-top";
import { BsChevronDoubleUp } from "react-icons/bs";

function App() {
 


  return (
    <div className="App">
    <RouterApp />
       <ScrollToTop id="scrol-up" smooth component={<BsChevronDoubleUp size="20px"/>} style={{borderRadius:"0px",boxShadow:"none",position:"fixed",bottom:"10px",right:"12px",backgroundColor:"#404040"}} />

      </div>
   
  );
}

export default App;

        //            <img className="lazy" src="img/img-2.jpg" alt="img" />
