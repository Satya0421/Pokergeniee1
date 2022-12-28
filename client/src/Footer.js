import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-grid.css';
import './critical.css';
import './font-awesome.min.css';
import './index.css';
import './slick.min.css';
import './style.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import API from './Api';

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false)};
  const handleShow = () => setShow(true);

  const Subscriber=async(e)=>{
    e.preventDefault();
    const Subscriber = e.target.subscriber.value;
    let objectOb = {
            
            email: Subscriber,
           

          }
    //alert(Subscriber);
    await axios
                .post(API+'/subscribe', objectOb)
                .then((response) => {
                  //console.log(response);
                  //console.log(objectOb);
                  toast.success("Successfully subscribed.",{position: "top-center",});
                 e.target.subscriber.value= " ";
                })
                .catch((error) => {
                 // console.log(objectOb);
                 // console.log(error.response.data)
                  toast.error(error.response.data,{position: "top-center",});
                 })
  }

  return (
<div className="">                          

          
        <footer style={{margin:"0px"}}>
    
      <div className="row " style={{margin:"5px",marginTop:"20px"}}>
        <div className="col-12 col-sm-12 col-lg-3 col-md-4 footer-info" >
          <h6>contact us</h6>
          <p style={{color:"#7d7d7d"}}><i className="fa fa-map-marker" style={{float:"left",padding:"0px",width:"25px",}}></i><span><a href="#" 
           target="_blank" style={{color:"inherit",textDecoration:"none",marginBottom:"25px"}}>#29 , Shitolla Street, Kolkata, WB 700007.</a></span></p>
           
           <p style={{color:"#7d7d7d"}}> <i className="fa fa-envelope" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span style={{width:"auto",}} onClick={(e) => {window.location.href ='mailto:corporate@multiplexdrone.com';}}>Support@pokergeniee.com</span>
             </p>
            <p style={{color:"#7d7d7d"}}> <i className="fa fa-phone" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span>+91-8904095588</span>
             </p>
             <p style={{color:"#7d7d7d"}}><i className="fa fa-phone" aria-hidden="true" style={{float:"left",padding:"0px",width:"25px",}}></i><span>+91-8904085588</span>
             </p>


         
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-9  blok-link footer-link" style={{margin:"0px",padding:"0px"}}>
          <div className="row" style={{margin:"0px"}}>
          <ul className="col-4 col-sm-4 col-lg-4 col-md-3 support-pages">
          <h6>Pages</h6>
            <li ><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Promotions</a></li>
            <li><a href="#">Tournaments</a></li>
          </ul>
      
          
          <ul className="col-4 col-sm-4 col-lg-4 col-md-4 support-foot">
          <h6>information</h6>
            <li><a href="#">Rake Structure</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#Withdrawals_And_Timings">withdrawal Timinig</a></li>
            <li><a href="#">How To Play</a></li>
            <li style={{visibility:"visible"}}><a href="#" data-bs-toggle="modal" data-bs-target="#disconnection-policy">Disconnect Policy</a></li>
          </ul>
        
          <ul className="col-4 col-sm-4 col-lg-2 col-md-5 support-foot" >
          <h6>support</h6>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#">Refund Policy</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#cancellation-policy">Cancellation Policy</a></li>
            <li ><a href="#" data-bs-toggle="modal" data-bs-target="#privacy-policy">Privacy Policy</a></li>
          </ul>
          </div>

        </div>
        

      </div>
      <br />
      {//<div className="" style={{textAlign:"center",padding:"0px",paddingRight:"0%",width:"100%",margin:"0px"}}>
         //         <a href="#" className="logo-disappear" style={{textAlign:"center",padding:"0px"}}><img src="pokergenieelogo1.png" alt="logo" style={{textAlign:"center",paddingRight:"0%"}} /></a>
           //     </div>
              }
      <div className="footer-bottom" style={{margin:"0px",padding:"0px"}}>
        
          
         <div className="row justify-content-between copyright" style={{margin:"0px"}}>
         <div className="col-12 col-md-3 " style={{textAlign:"center"}}>
              <p className="logo-disappear">
            <img src="pokergenieelogo.png" height="50px" width="120px" alt="logo" style={{paddingRight:"0%"}} />
              </p>
            </div>
            <div className="col-12 col-md-4 copyRightHolder v-II text-center pt-md-4 " style={{}}>
              <p className="">
                &#169; Copyright : <a>pokergeniee.com</a>
              </p>
            </div>
            <div
              className="col-12 col-md-3 mt-3"
              style={{ color: " #fff" }}
            >
              <p className="text-center">
                Powered by : <a href="https://www.techraven.live" target="_blank">
                  <img src="img/TRlogo.png" height="12px" alt="" />
                </a>
                
              </p>
            </div>
          </div>
        
      </div>
    
  </footer>


  

<div className="modal fade" id="privacy-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header"style={{backgroundColor:"#ECBE07"}}>
        <h4 className="heading-main">Privacy Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                      <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.pokergeniee.com</h6></p>

        <p className="text-dark"> This Privacy Policy applies to the "PokerGeniee.com" website and applications (collectively, the "Company"), which are administered by Thorondor Networks Pvt Ltd. The Company offers users free and paid poker games, as well as other associated services ("Services"), through the Company.
      </p>
      <p>The Platform's operators are referred to as 'Company,' 'us,' or 'we.' The phrase "you" or "User" refers to the Platform's user or viewer.
      </p>
      <p>The Company values its Users' privacy and is committed to protecting it in all ways in order to provide them with a rich and comprehensive online experience. You must register and create an account on the platform using a unique player ID, secret password, and other optional numeric authentication mechanisms. The Company collects information about the User in two ways: <br />I information provided by the User; and <br /> (ii) information automatically tracked while the User navigates the Platform.
      </p>
      <p>Please read this Privacy Policy before submitting any information to the Platform. It explains how we will handle your Personal Information (as defined hereinafter). You accept the collection, use, disclosure, and transfer of your Individual Information for the purposes indicated in this Privacy Policy and the collection, processing, and maintenance of this information by using any element of the Platform. Please do not use the Platform if you do not agree to our Privacy Policy. By using any element of the Platform, you agree to be bound by this Privacy Policy, including the collection, use, and sharing of your Personal Information in accordance with it.
      </p>

<p className="text-dark font-weight-bold">Purpose and Usage:</p>
<p>
To register on the Platform, Users will be needed to enter specific information for the registration process, including but not limited to: Player ID, Password, Email address, Date of Birth, Telephone Number, Postal/Contact Address, and PAN Number, in order to register for the Platform.
</p>
<p>You may be asked to provide more information in order for us to provide you with access to the Platform's features and services and to authenticate your identity.
</p>
<p>The data provided by users allows us to enhance the Platform and provide you with the best user-friendly experience possible. In limited cases, the Company may disclose such information with affiliates and third parties, such as to provide Services requested by you, to comply with legal process, to avoid fraud or imminent harm, and so on.
</p>


<p className="text-dark font-weight-bold">Personal Information</p>
<p>
"Personal Information" is defined as any information that can be used to identify you and is not otherwise publicly available, such as your first and last name, player ID or username, residence or other mailing address, email, mobile number, or other contact details, for the purposes of this Privacy Policy.
</p>
<p>When you register for any of the Platform's Services or otherwise freely supply such information, the Company may collect Personal Information from you. Your name, email address, and mobile phone number may also be used by the Company to give you updates regarding tournaments/games/contests/promotions available on the Platform. If you want to unsubscribe from these emails at any time, please let us know the same using any mode of communication.
</p>
 

<p className="text-dark font-weight-bold">Disclosure/Sharing</p>
<p>
Any Sensitive Personal Information ("SPI") gathered by the Firm in the process of providing the Services, including your password and financial data (such as bank account details or credit card numbers), will not be divulged without your explicit consent, unless otherwise provided in this Privacy Policy or the Platform Terms of Service, or as required by law. It is clarified that this condition does not extend to publicly available information about you on the Platform, including SPI.
</p>
<p>The Company may also communicate knowledge provided by you and data about Platform usage with third-party service providers hired by the Company for business intelligence or other auxiliary functions, such as improving the Services and assisting the Company in better serving you. By using the Platform, you explicitly accept and grant the Company permission to collect, use, and store your Personal Information. The Company retains the right to share, disclose, and transfer Personal Information collected under this Agreement with its own affiliate.
</p>
<p>Consumer information may be one of the business assets exchanged, divulged, or transferred as part of the transaction if the Company sells or transfers all or a share of its business assets. You hereby provide the Company with your explicit approval and authority to disclose and transfer information to such third parties. In addition, the Company reserves the right to disclose Personal Information where required by law, in response to fully authorized legal process, governmental inquiries, and to protect the Company's rights and interests.
</p> 

<p className="text-dark font-weight-bold">Security Procedures</p>
<p>
All data collected on the Platform is securely saved in a database managed by the Company. The database is stored on servers secured by a firewall, with access controlled by a password and strictly limited to those with a need-to-know basis. However, we recognize that no security system is impenetrable, no matter how effective it is. As a result, we cannot guarantee the security of our database or that information you provide will not be intercepted while being sent to us over the Internet. Furthermore, any information you put in a discussion section posting will be accessible to anybody with an Internet connection. You acknowledge and agree that your information may be used in or moved to countries other than India while using the Platform.
</p>
<p>The firm also feels that the internet is a dynamic medium. We may review and update our Privacy Policy from time to time to accommodate any future changes that we deem appropriate, without providing you with prior notice. Regardless of what the new policy is, we will always utilise any information we acquire in accordance with the policy under which it was collected. Any updates to our Privacy Policy will be placed on this page, so you'll always know what information we gather, how we use it, how we store it, and when we reveal it.
</p>
  
<p className="text-dark font-weight-bold">Advertising</p>
<p>
When the Company provides information to its online advertisers in order to assist them in better understanding our demographic and confirm the advertising effectiveness on the Platform, it normally takes the form of aggregated statistics on visits to various sites on the Platform.
</p>
<p>When you register with Company, we will contact you periodically to update your content and give features that we believe will be beneficial to you.
</p>
<p>Several fraudulent emails, websites, blogs, and other forms of communication purporting to be from or linked with the Company may or may not be circulating on the Internet. Our logo, photographs, links, content, and other information are frequently included in these emails, websites, and blogs. Some emails, websites, blogs, and other forms of communication ask users to provide login information, such as usernames and passwords, to inform them that they have won a prize or gift, or provide instructions on how to commit an illegal or unauthorized act or deed, or to request detailed personal information or a payment of some sort. The sources and contents of these emails, websites, blogs, and other items are unrelated to Company in any way.
</p>
<p>We strongly advise against responding to emails or using websites, blogs, or other social media platforms for your own safety. We may use the information you submit to us, such as your email address or phone number, to approach you about the Platform's Offerings or to inform you about our Services.
</p>

<p className="text-dark font-weight-bold">Retention of Data</p>
<p>
Your personal information may be kept and used until: I the relevant purposes for using your details described in this Privacy Policy are no longer applied; and (ii) we are no longer required to keep your confidential info by applicable law, legislation, contract terms, or legitimate business purposes, and the retainment of your personal information is not needed for the establishment, exercise, or defence of any legal claim.
</p>

<p className="text-dark font-weight-bold">Protection of Minors</p>
<p>
The Company's products are not designed for or directed at minors or those under the age of consent. Anyone who supplies us with Personal Information certifies that they are at least 18 years old or over the legal consent age in their jurisdiction, whichever is higher. We have the right to inspect and verify any info you provide or that we collect. If we learn that a minor has solicited or submitted information, we may refuse to accept it and may take measures to eliminate it from our database.
</p>

<p className="text-dark font-weight-bold">Consent to use of Anti-Cheating Software</p>
<p>
Certain aspects in the Company's software package are intended to detect the usage of automated programmes that allow artificial (non-human) intelligence to engage on our Platform. You accept to our software executing the functions indicated in this section by installing it and using the Services. In order to detect the usage of illicit automated programmes and ensure that we preserve a cheat-free environment for all users, the Company's software may conduct any or all of the following functions:
</p>
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>While using the services, scan your list of active software applications; </p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>While using the facilities, scan your list of active processes; and</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>Inspect the files in your Services and site-related application folders to check that only "non-hacked" versions of our software are in use. If any of the preceding processes identifies a suspect application or process, Our software may inspect the files associated with the suspect application or procedure and compile a composite matrix (i.e., a profile that characterises the files associated with the implementation or process) that can be compared to profiles for known illicit automated programmes. Our software will not conduct a random search of vast areas of your hard drive, equipment, or data, and it will not send any information to us or any third party other than the information you supply.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
</div></div>

<p className="text-dark font-weight-bold">Contact Us</p>
<p>
Any questions or clarifications with respect to this Privacy Policy or any complaints, comments, concerns or feedback can be sent to Company via email at <b>support@pokergeniee.com</b>.
</p>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#ECBE07",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>


<div className="modal fade" id="shipping-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main">Shipping Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>

<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>We guarantee to provide accurate descriptions and high quality product as mentioned in the website. If product shipped is found damaged, mismatched or faulty then the customer needs to inform within 5 days after receiving the consignment.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>No warranty will apply if the product has been subjected to misuse, static discharge, neglect, accident, modification, or has been soldered or altered in any way.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>After the full payment, product will be dispatched within 2 working days and tracking number will be given to the customers.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="refund-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="heading-main refund-policy">Payment & Refund Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
        <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>
        <div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Training course registrations will not be confirmed until registration is complete and billing information is received in full.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>Upon the special request, training can be rescheduled to future drone training.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>In order to reschedule a confirmed training please submit an email request to training@multiplexdrone.com .</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
            
            <div className="">
            <div className="li-num" >4</div>
            <div className="policy-description" >
            <p>Please submit reschedule requests atleast one week before the commencement of drone training.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">5</div>
            <div className="policy-description">
            <p>If a training class is cancelled due to any unforeseen circumstances such as weather or natural disaster, candidate is entitled to reschedule for a future training course.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">6</div>
            <div className="policy-description">
            <p>Online convenience fees is chargeable to the customers</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="terms-conditions" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:"#ECBE07"}}>
        <h4 className="heading-main">Terms and Conditions</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
      <div><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.pokergeniee.com</h6></div>
        <p>These Terms and Conditions (hereinafter referred to as Agreement) govern the legal relationship between Thorondor Networks Pvt. Ltd., India (hereinafter referred to as PokerGeniee) and the end users / players.
        </p>
        <p>These Terms, contain provisions that define your limits, legal rights and obligations with respect to your use of and participation in (i) the PokerGeniee website and mobile application, including any advertisements, forums, various email functions and Internet links, and all content and PokerGeniee services available through the domain and sub-domains of PokerGeniee located at http://www.pokergeniee.com/www.pokergeniee.com (hereinafter collectively referred to as “Website”).
        </p>
        <p>All references to “you” or “your”, as applicable, shall mean the person that accesses, uses, and/or participates in the Website in any manner. If you become a Registered Member (as defined below) on behalf of any legal person, you represent and warrant that you have the authority to bind such legal person and your acceptance of the Terms will be deemed an acceptance by that legal person and “you” and “your” herein shall refer to that legal person.
        </p>


<p className="text-dark font-weight-bold">Description of services offered</p>
<p>
PokerGeniee.com is an online poker website, providing top of the line software and an impeccable customer experience for poker enthusiasts in India. We aim to bring to India the same levels of gameplay and network performance in online poker as customers have access to internationally, and build a robust platform for poker enthusiasts in the country to engage in an exciting gaming experience. We provide IT and technology services to promote online games of skill, specifically online poker, for real money as well as play money games (“Services”). The Services provided by this website intended solely to encourage gameplay on the website, and for entertainment purposes. This website is not responsible for any acts that may take place outside the purview of the website.
<br /><br />
"Due to the nature of the business, PokerGeniee does not provide refunds or Chargebacks or exchanges under any circumstance."<br /><br />
Users must use any money in their Account within 360 days. Thorondor Networks Pvt. Ltd. will have the right to directly forfeit any such unused amount after 361 (three hundred and sixty one) days. The idle Balance amount lying in your account may be withdrawn only in exceptional circumstances, determined on a case to case basis on the sole discretion of the company.
</p>
<p className="text-dark font-weight-bold">Changes to the Services</p>
<p>We may from time to time add new services to the Services, substitute a new service for one of the existing Services, or discontinue or suspend one of the existing Services. Information about the new services will be included on the Website, and the users of new services will be governed by these Terms. You agree that PokerGeniee will not be liable to you or any third party for any suspension or discontinuation of any of the Services.</p>
 
 <p className="text-dark font-weight-bold">Use of Website</p>
<p>By accessing and using the Website and the functionalities and Services provided by it, you hereby agree and confirm that you have clearly and unambiguously read and understood the Terms and Conditions, Privacy Policy, Disclaimer, and all other documents attached with this Website. If you have not read these, please read the same carefully and only then use the Website. If you do not accept these Terms, you must discontinue use of PokerGeniee. By accepting these Terms, you are entering into a legally binding Agreement with PokerGeniee.
<br /><br />
All the Documents provided by this Website and all other Terms and Conditions as separately provided by any pamphlet, promotional offer, advertisement between the Website and the Users, are part and parcel of this Website and the User has agreed to all of them in a composite and comprehensive manner to access and use this Website, its functionalities and Services.
</p>
         
<p className="text-dark font-weight-bold">Changes to These Terms</p>
<p>
We may change these Terms at any time, as we reasonably deem appropriate. Upon any change in these Terms, we will post the amended agreement on the Website with notice of the changes. Your continued use of the Website and/or the Services following such notification shall constitute your affirmative acknowledgement of the Terms, the modification and agreement to abide and be bound by the Terms, as amended. If at any time you choose not to accept these Terms, including following receipt of notification of any modifications hereto, do not use the Website, or the Services.
</p>

<p className="text-dark font-weight-bold">License and Access</p>
<p>
PokerGeniee hereby grants you a limited, non-exclusive, revocable license to use the Website as set forth in the Terms; provided, however, that,
</p>
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>You will not copy, distribute, or make derivative works of the Website in any medium without our prior written consent;</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>You will not alter or modify any part of the Website other than as may be reasonably necessary to use the Website for its intended purposes; and</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>You will otherwise act in accordance with the terms and conditions of the Terms and in accordance with all applicable laws.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
</div></div>

<p className="text-dark font-weight-bold">Restricted Locations</p>
<p>
The Mobile Games and the services available on the Platform are open only to Persons currently residing in India. Persons residing in the state of Assam, Odisha, Nagaland, Andhra Pradesh, Gujrat and Telangana (“Restricted States”) are prohibited from participating in any Mobile Games on the Platform. We (The Company) shall not be liable for any user who willingly or unwillingly participates in games that are not permitted from the mentioned states.
</p>

<p className="text-dark font-weight-bold">USE OF EXTERNAL PLAYER ASSISTANCE PROGRAMS AND HEADS UP DISPLAYS</p>
<p>
The company prohibits the use of External Player Assistance Programs, Virtual Private Networks or Heads up Displays which are designed to provide an unfair advantage to any Users. The User acknowledges that any information on other players beyond that which the User has personally observed through the User's own game play constitutes an unfair advantage. You agree that The Company may take steps to detect and prevent the use of these software’s, hardware’s or any other external devices or applications. These steps may include, but are not limited to, examination of software programs running concurrently with the Software on the User's computer, examination of use of VPN devices, Player assistance programs, Geo position data or any other action as required by the company to maintain fair play on the website.
</p>

<p className="text-dark font-weight-bold">USE OF AUTOMATIC PLAYER SOFTWARES OR HARDWARES</p>
<p>
The use of artificial intelligence including, without limitation of "robots" or "bots" or any other forms of external digital assistance devices by Users is strictly forbidden in connection with the Service. The company will take any and all actions necessary to prevent or stop such activities including but not limited to, permanent stoppage of access to the website, freezing of funds or any other action that the company may deem adequate. All actions taken in relation to the Service by a User must be executed personally by the user through the user interface accessible provided by the company in the manner intended by the company only.
</p>

<p className="text-dark font-weight-bold">CHIP-DUMPING ACTIVITIES</p>
<p>
Chip-dumping occurs when any User intentionally loses a hand in order to deliberately transfer his chips to another User. Any User who chip-dumps or attempts to chip-dump with any other User, or who benefits from such actions taken by another User while using the Service may be permanently banned from using the Service and their account may be terminated immediately, without release of funds. In such circumstances the company will be under no obligation to refund any monies that may be in such Users’ accounts at such time and the Website will have the right to initiate legal proceedings against the offending player.
</p>

<p className="text-dark font-weight-bold">FRAUDULENT BEHAVIOR</p>
<p>
In the event that the website deems that a User has engaged or attempted to engage in fraudulent, unlawful, dishonest or improper activity while using the Service, or any other game manipulation, or the making of any fraudulent payment, including without limitation, use of a stolen credit card or fraudulent chargeback. The company shall be entitled to take such action as it sees fit, including, but not limited to:
</p>
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Immediately blocking a User's access to the Service;</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>Terminating a User's account with the website;</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>Seizing the funds within a User's account;</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">4</div>
            <div className="policy-description">
            <p>Disclosing such information (including the identity of the User) to financial institutions, relevant authorities and/or any person or entity that has the legal right to such information; and/or Taking legal action against a User.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div></div>

<p className="text-dark font-weight-bold">Wagering</p>
<p>
‘Wagering’ is the act of committing certain funds on a game. A user must wager a minimum of 40% of the deposit amount (at every deposit). If a user fails to wager a minimum of 40% of the deposit, a platform handling fee of 10% will be charged on the total sum of withdrawals made without meeting the wagering criteria.
<br /><br />
If you do not wish to wager 40% of the deposit amount before withdrawing your funds, please refrain from using this platform.
<br /><br />
Winnings if any, are liable to taxes as per the rules and regulations of the government of India.
</p>

<p className="text-dark font-weight-bold">User Validation</p>
<p>Every user on PokerGeniee is subject to ‘User Validation’ process. First time user validation process takes between 24 hours via the  KYC Validation  process in the application. A user is expected to provide PAN copy, Address proof copy, banking details to ensure that he/she is over the age of 18 years, is not playing from a restricted state and also to verify banking information. This platform cannot be used to deposit and withdraw money without playing on the games. To ensure this process, a users’ KYC will only be approved if they have played games. Users are expected to refrain from depositing on this platform if they are not willing to play the game of poker. For any issue regarding KYC, please email to us at <b>Support@pokergeniee.com.</b>
</p>

<p className="text-dark font-weight-bold">Winnings</p>
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Awards for all Contests shall be pre-declared at the time of registration in the specific rules applicable to such Contest. Awards may be in the form of Tokens, cash or promotional gifts.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>Users are eligible to withdraw only cash Winnings from his/her Account to his/her respective bank/wallet account once it is KYC (Know Your Customer) verified.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>KYC verification is mandatory as a proof of identity for making withdrawals from Your Account to Your bank/wallet account. KYC verification may be done through the Platform by providing certain details: (i) photograph of a valid government ID (Aadhar Card, PAN Card, Voter Card, Driving License etc.); and (ii) other User Details.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">4</div>
            <div className="policy-description">
            <p>The Company does not issue receipts for entries in the Contests. The entries are accounted within the Account on the Platform. It is the responsibility of the Users to ensure that the entries are accurate and the Winnings are duly credited to his Account.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">5</div>
            <div className="policy-description">
            <p>Any tax/levies/duty etc., as applicable on material prizes, shall be paid by the winner of the game. Based on TDS (tax deducted at source) Rules for any sort of game winning in India, 31.2% TDS should be deducted on any winning above Rs.10000/- in a single game.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div></div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#ECBE07",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="Withdrawals_And_Timings" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%"}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:"#ECBE07"}}>
        <h4 className="heading-main">Withdrawals And Timings</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.pokergeniee.com</h6></p>
      <p>PokerGeniee offers a transparent and user-friendly withdrawal process. 
        The amount the user chooses to withdraw gets instantly deducted from his PokerGeniee account disallowing the user to use that amount for playing.

      </p>
      <p>When you request for withdrawal, firstly the deposit amount will be withdrawn. If the deposit section doesn't have sufficient balance to match the requested withdrawal amount, the remaining amount will be taken from the winnings.
      </p>
      <p>There are no charges/deduction for withdrawing your prize money until the user is found to be involved in any malicious activity/unfair game-play.
      </p>

      <p className="text-dark font-weight-bold">Withdrawal Processing Time</p>
      <p>
        Withdrawals are processed on all days (including weekends).  All the Withdrawals requested/modified happens 4 times in a day. At 12.00pm, 3.00pm, 6.00pm and 9.00pm.      
      </p>
      <p>Once processed from our end, it usually takes up to 4 hours for the funds to reflect into your bank account depending upon your bank processing speed. Sometimes the payment gets stucked at the bank's end and may take up to 72 hours to reflect into your bank account.
      </p>
      <p>Your withdrawal may fail sometimes if the receiving bank is having downtime at the time of the transaction is initiated. If this happens, the withdrawal may get reversed/failed. In such a scenario, the bank takes 5-7 working days to update the reversal statuses. You don't need to worry - if the transaction is reversed/failed, the funds will be credited back to your PokerGeniee account.
      </p>

      <p className="text-dark font-weight-bold">Note </p>
      <p>
        Downtime periods vary from bank to bank.      
      </p>

      <p className="text-dark font-weight-bold">Withdrawal of deposited amount</p>
      <p>
        Withdrawal of deposits is only allowed once you wager 40% of the respective amount on the tables.      
      </p>
      <p>If user has not used any bonus code at the time of deposit. In case where the user has availed/used any promotional offer/bonus code, the terms of the respective offer have to be fulfilled.
      </p>
      <p>The respective precaution is necessary in order to curb any malicious activity or laundering of funds through our platform.
      </p>
      <p>You can check the remaining criteria for releasing your deposited funds in the event of using bonus codes in the promotion page. 
          Feel free to contact us if there is more clarity required over the same.

      </p>
      <p>If the user fails to accumulate the respective criteria for withdrawing PokerGeniee retains the right to forfeit or even ban the respective user confiscating his funds on the platform.
      </p>


      <p className="text-dark font-weight-bold">TDS Deduction</p>
      <p>
        At the time of withdrawal, 'Net Winnings' of more than 10000 are subject to TDS of 30% and payment to the player will be after deduction of such taxes.      
      </p>
      <p>Example:
      <br />A user has Withdrawable Balance: 30,000 (deposit 5,000 + winning 25,000)
      </p>

<div className="row">
<div className="col-12">
            
            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>The user withdraws Rs15000 (5000 Deposit + 9999 Net winning). No TDS will be applicable.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>The user withdraws Rs20000 (5000 Deposit + 15000 Net winning). 30% TDS will be applicable on net winning i.e. 30% of 15000. </p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>

Also note an individual can withdraw 9999/- every day without the implication of any taxations from our end. 
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#ECBE07",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>



<div className="modal fade" id="disconnection-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:"#ECBE07"}}>
        <h4 className="heading-main refund-policy">Disconnection Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
        <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.pokergeniee.com</h6></p>
        <p>PokerGeniee makes the best effort to ensure that all players are offered an even gaming experience. Should any player face disconnection issues during a game, the following policies shall apply.
        </p>
        <div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Players that are disconnected from the game server during any bets they have committed to the pot shall be retained in the game until their turn is up next. Any player that does not reconnect by that time will be folded and the turn will go to the next player.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>Players must accept the risk of disconnection, and should simply log back in and continue playing as quickly as possible if they are cut off. PokerGeniee does not accept any risk for disconnection of a player.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>As soon as the software detects a disconnection, it will make every attempt to reconnect to the server and return the player to the game table they were seated at. If the internet connection has been lost, there is no possibility that the player may be able to connect at all.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
            
            <div className="">
            <div className="li-num" >4</div>
            <div className="policy-description" >
            <p>PokerGeniee reserves the right to alter all policies in this regard and any disputes in this regard will be resolved by management. The decision in this case will be final and binding.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">5</div>
            <div className="policy-description">
            <p>If a player who is deemed to be disconnected has the option to check on his turn, our software will automatically carry out this action and the player will be retained in the game.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">6</div>
            <div className="policy-description">
            <p>Every player is allocated a bonus time of 60 seconds every 2 hours. If the player disconnects, the server will wait for 60 seconds or the remaining bonus time after the regular time to act. If the player does not reconnect or return to the table within this time, the player will be folded automatically. If the player has used up all bonus time, then they must wait for the server to top-up the time at intervals decided by PokerGeniee.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">7</div>
            <div className="policy-description">
            <p>Disconnection protection as explained in step 6 is not available in and Multi table Tournaments.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#ECBE07",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="cancellation-policy" tabindex="-1" aria-labelledby="" aria-hidden="true" style={{minWidth:"60%",}}>
  <div className="modal-dialog modal-dialog-scrollable" style={{minWidth:"50%"}}>
    <div className="modal-content">
      <div className="modal-header" style={{background:"#ECBE07"}}>
        <h4 className="heading-main refund-policy">Cancellation Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
        <p><h6 style={{color:"black",textAlign:"center"}}>WELCOME TO WWW.POKERGENIEE.COM</h6></p>
        <div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" >
            <p>Due to the immediate nature of business, Thorondor Networks Pvt Ltd does not allow cancellation of a transaction. If a user would like a refund of a transaction due to human error, please email us at support@pokergeniee.com and we will ensure that your request is processed within 24-48 banking hours.</p>
            </div>
            <div style={{clear:'both'}}></div>
            </div>


            <div>
            <div className="li-num">2</div>
            <div className="policy-description">
            <p>PokerGeniee, at its discretion, may decide to cancel any tournament without prior notice.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>

            <div>
            <div className="li-num">3</div>
            <div className="policy-description">
            <p>In the event of a buy-in tournament, the entire amount of the buy-in and fees paid by the user to participate in the tournament will be refunded fully as long as no payouts have been awarded.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div>
            
            <div className="">
            <div className="li-num" >4</div>
            <div className="policy-description" >
            <p>Should a tourney be canceled midway, all refunds will be at the discretion of PokerGeniee based on the following factors.<br />
           <b style={{color:"#ECBE07"}}> a.</b>  In the event of payouts been made for a tournament, then the balance amount will be distributed equally to the remaining players.<br />
           <b style={{color:"#ECBE07"}}> b.</b>  In the event where the payouts have yet to be made towards the tournament , then the payouts will be canceled and the entire amount will be refunded to each player.<br />        
           <b style={{color:"#ECBE07"}}> c.</b>  The choice of which option to use will be at the discretion of PokerGeniee at all times.
            </p>

            
            

            </div>
            <div style={{clear:'both'}}></div>
            </div>


            

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#ECBE07",border:"none"}}>Close</button>
        
      </div>
    </div>
  </div>
</div>


<ToastContainer />

</div>     
  );
}

export default Footer;




