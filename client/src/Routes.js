import {useState} from "react";
 
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import Training from "./Training";
import MD5q from "./MD-5q";
import MD10q from "./MD-10q";
import MD10h from "./MD-10h";
import MD16p from "./MD-16p";
import Ikshana from "./Ikshana";
import ChotaBheem from "./ChotaBheem";
import Bheem from "./Bheem";
import FogStar from "./FogStar";
import Gallery from "./Gallery";
import Careers from "./Careers";
import NewsAndEvents from "./NewsAndEvents";
import TrainingRegistration from "./TrainingRegistration";
import AdminLogin from "./Admin/AdminLogin";
import AdminHome from "./Admin/AdminHome";
import RegisteredUsers from "./Admin/RegisteredUsers";
import AddTestimonials from "./Admin/AddTestimonials";
import AddJobVacancies from "./Admin/AddVacancies";
import AddGallery from "./Admin/AddGallery";
import AddYoutubeLinks from "./Admin/AddYoutubelinks";
import GetCatlogsDownloaders from "./Admin/GetCatlogsDownloaders";
import JobApplicants from "./Admin/GetJobApplicants";

export default function RouterApp() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/training" element={<Training />} />
        <Route  path="/products" element={<Products />} />
        <Route  path="/services" element={<Services />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/md5q" element={<MD5q />} />
        <Route  path="/md10q" element={<MD10q />} />
        <Route  path="/md10h" element={<MD10h />} />
        <Route  path="/md16p" element={<MD16p />} />
        <Route  path="/fogstar" element={<FogStar />} />
        <Route  path="/bheem" element={<Bheem />} />
        <Route  path="/chotabheem" element={<ChotaBheem />} />
        <Route  path="/ikshana" element={<Ikshana />} />
        <Route  path="/newsandevent" element={<NewsAndEvents />} />
        <Route  path="/gallery" element={<Gallery />} />
        <Route  path="/career" element={<Careers />} />
        <Route path="/trainingregistering" element={<TrainingRegistration />} />

        <Route  path="/mdadmin" element={<AdminLogin />} />
        <Route  path="/adminhome" element={<AdminHome />} />
        <Route  path="/registeredusers" element={<RegisteredUsers />} />
        <Route  path="/getCatlogsDownloaders" element={<GetCatlogsDownloaders />} />
        <Route  path="/addtestimonials" element={<AddTestimonials />} />
        <Route  path="/addgallery" element={<AddGallery />} />
        <Route  path="/addyoutubelinks" element={<AddYoutubeLinks />} />
        <Route  path="/addjobvacancies" element={<AddJobVacancies />} />
        <Route  path="/getjobapplicants" element={<JobApplicants />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}