import {useState} from "react";
 
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import Home from "./Home";


export default function RouterApp() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Home />} />
       
    </Routes>
    </BrowserRouter>
    </>
  );
}