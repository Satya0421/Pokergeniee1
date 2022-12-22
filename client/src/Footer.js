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
            <li><a href="#">withdrawal Timinig</a></li>
            <li><a href="#">How To Play</a></li>
            <li style={{visibility:"visible"}}><a href="#">Disconnect Policy</a></li>
          </ul>
        
          <ul className="col-4 col-sm-4 col-lg-2 col-md-5 support-foot" >
          <h6>support</h6>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#">Refund Policy</a></li>
            <li><a href="#" data-bs-toggle="modal" data-bs-target="#">Cancellation Policy</a></li>
            <li ><a href="#" data-bs-toggle="modal" data-bs-target="#">Privacy Policy</a></li>
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
              <p className="">
            <img src="pokergenieelogo1.png" height="50px" width="120px" alt="logo" style={{paddingRight:"0%"}} />
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
      <div className="modal-header">
        <h4 className="heading-main">Privacy Policy</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body main">
                      <p><h6 style={{color:"black",textAlign:"center"}}>Welcome to www.multiplexdrone.com</h6></p>

        <p className="text-dark"> Multiplex Drone PVT. ltd. values all information which is stored or used on this website through transactions. We follow best practices in the industry to keep all information safe and secure. We urge all users of this website to go through our privacy policy to learn more about our practices.

</p><p>We publish this in accordance with rule (3)(1) of the information technology (intermediary guidelines) rules,2011.</p>

<p className="text-dark font-weight-bold">Note:</p>
<p>
Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
</p>
<p>By visiting this website you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree please do not use or access our website.
</p>
<p>By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
</p>  
<div className="row">
<div className="col-12">

            <div className="">
            <div className="li-num" >1</div>
            <div className="policy-description" ><b>Collection of personally identifiable information and other information</b><br /><br />
            <p>When you use our website, we collect and store your personal information which is provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our website to make your experience safer and easier. More importantly, while doing so we collect personal information from you that we consider necessary for achieving this purpose.
            </p>
            <p>We use data collection devices such as "cookies" on certain pages of the website to help analyse our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing our services. We offer certain features that are only available through the use of a "cookie".
            </p>
            <p>We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Website and you may be required to re-enter your password more frequently during a session.
            </p>
            <p>Additionally, you may encounter "cookies" or other similar devices on certain pages of the Website that are placed by third parties. We do not control the use of cookies by third parties.
            </p>
            <p>If you subscribe to services offered on our Website, we collect information such as a billing address, a credit / debit card number and a credit / debit card expiration date and/ or other payment instrument details and tracking information from cheques or money orders.
            </p>
            <p>If you choose to post messages on our message boards, chat rooms or other message areas or leave feedback, we will collect that information you provide to us. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.
            </p>
            <p>If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.
            </p>
            <p>We collect personally identifiable information (email address, name, phone number, credit card / debit card / other payment instrument details, etc.) from you when you set up an account with us. While you can browse some sections of our Website without being a registered member, certain activities (such as using our premium services) do require registration. We do use your contact information to send you offers related to our services or any other third-party services.
            </p>
            </div>
            <div style={{clear:'both'}}></div>
            </div><br />


            <div>
            <div className="li-num">2</div>
            <div className="policy-description"><b>Use of Demographic / Profile Data / Your Information</b><br /><br />
            <p>We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.</p>
            <p>In our efforts to continually improve our product and service offerings, we collect and analyse demographic and profile data about our users' activity on our Website.</p>
            <p>COOKIES</p><p>A "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. We place both permanent and temporary cookies in your computer's hard drive. The cookies do not contain any of your personally identifiable information.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">3</div>
            <div className="policy-description"><b>Sharing of personal information</b><br /><br />
            <p>We may share personal information with our other corporate entities and affiliates. These entities and affiliates may market to you as a result of such sharing unless you explicitly opt-out.</p>
            <p>We may disclose personal information to third parties. This disclosure may be required for us to provide you access to our Services, to comply with our legal obligations, to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent, detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not disclose your personal information to third parties for their marketing and advertising purposes without your explicit consent.</p>
            <p>We may disclose personal information if required to do so by law or in the good faith belief that such disclosure is reasonably necessary to respond to subpoenas, court orders, or other legal process. We may disclose personal information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our Terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.</p>
            <p>We and our affiliates will share / sell some or all of your personal information with another business entity should we (or our assets) plan to merge with, or be acquired by that business entity, or re- organization, amalgamation, restructuring of business. Should such a transaction occur that other business entity (or the new combined entity) will be required to follow this privacy policy with respect to your personal information.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">4</div>
            <div className="policy-description"><b>Links to other sites</b><br /><br />
            <p>Our Website links to other Websites that may collect personally identifiable information about you. Multiplex Drone Pvt. Ltd. is not responsible for the privacy practices or the content of those linked Websites.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">5</div>
            <div className="policy-description"><b>Security precautions</b><br /><br />
            <p>Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession, we adhere to strict security guidelines, protecting it against unauthorized access.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">6</div>
            <div className="policy-description"><b>Choice/Opt-Out</b><br /><br />
            <p>We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.</p>
            <p>If you want to remove your contact information from the Website’s services’ lists and newsletters, please contact: corporate@multiplexdrone.com</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />

            <div>
            <div className="li-num">7</div>
            <div className="policy-description"><b>Advertisements</b><br /><br />
            <p>We do not serve ads on our Website.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />  

            <div>
            <div className="li-num">8</div>
            <div className="policy-description"><b>Your consents</b><br /><br />
            <p>By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.</p>
            <p>If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.</p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br />  


            <div>
            <div className="li-num">9</div>
            <div className="policy-description"><b>Grievance officer</b><br /><br />
            <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
            <p>shivakumar.hg@multiplexdrone.com <br />
                Head (Technical & Operations)<br />
                Multiplex Drone Pvt.Ltd.<br />
                No. 180, 1st Main Road, Mahalakshmi Layout<br />
                Bangalore-560086
            </p>
            </div>
            <div style={{clear:'both'}}></div>

            </div><br /> 

</div>

</div>


      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{background:"#1da912",border:"none"}}>Close</button>
        
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
        <p style={{textAlign:"justify",wordSpacing:"0px",whiteSpace: "nowrap"}}>These terms and conditions outline the rules and regulations for the use of www.pokergeniee.com,</p>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use www.pokergeniee.com if you do not agree to take all of the terms and conditions stated on this page.</p>

<p className="text-dark font-weight-bold">Payment</p>
<p>
These Terms and Conditions (hereinafter referred to as Agreement) govern the legal relationship between Thorondor Networks Pvt. Ltd., India (hereinafter referred to as PokerGeniee.com) and the end users/players.
These Terms contain provisions that define your restrictions, constitutional rights, and responsibilities with respect to (1) the PokerGeniee.com website and mobile application, including any adverts, discussion boards, multiple email functions, and Web links, and that all content and PokerGeniee.com services offered through the domain and sub-domains of PokerGeniee.com currently based at http://www.PokerGeniee.com/ (hereafter referred to as "Website")

All references to "you" or "your," as the case may be, refer to the person who accesses, uses, and/or interacts in any way on the Website. If you sign up as a Registered Member (as defined below) on behalf of a legal entity, you acknowledge and agree that you have the authority to bind that entity, and your acceptance of the Terms will be deemed acceptance by that entity, with "you" and "you’re" referring to that entity.


Description Of Services Offered
PokerGeniee.com is an online poker site that offers top-of-the-line software and excellent customer service to Indian poker players. We want to bring the same levels of gameplay and network infrastructure to India that customers have access to elsewhere in the world, and we want to build a solid platform for poker fans in the country to enjoy an exciting gaming experience. We provide infrastructure (IT) and technology services to facilitate online skill games, notably online poker, for both real money and play money ("Services"). This website's services are primarily intended to encourage website gameplay and for entertainment reasons. This website is not liable for any actions that occur beyond the scope of the website.


Changes To The Services
"PokerGeniee.com does not provide refunds, chargebacks, or exchanges under any circumstances due to the nature of the business."
Any money in a user's account must be used within 360 days. After 361 (three hundred and sixty-one) days, Thorondor Networks Pvt Ltd. has the right to forfeit any unused funds. Only in extreme circumstances, determined on a case-by-case basis at the sole discretion of the firm, may the idle Balance amount on your account be withdrawn.
We may introduce new services to the Services from time to time, substitute new services for existing Services, or discontinue or stop current Services. The Website will be updated with information about the new services, and users of the new services will be bound by these Terms. You agree that PokerGeniee.com will not be liable to you or any other party if any of the Services are suspended or discontinued.



Use Of Website
You hereby agree and affirm that you have read and understand the Terms and Conditions, Privacy Policy, Disclaimer, and all other papers attached to this Website before accessing and using the Website and the functionality and Services provided by it. Please read these carefully before using the Website if you have not already done so. You must stop using PokerGeniee.com if you don't agree to these Terms. You are forming a legally binding agreement with PokerGeniee.com by accepting these Terms.
All of the Documents released by this Website, as well as all other Terms and Conditions provided separately by any brochure, promotional offer, or adverts between the Webpage and the Users, are a part of this Website, and the User has agreed to all of them in a composite and thorough manner in order to access and use this Website, its features, and Facilities.



Changes To These Terms
We have the right to amend these Terms at any moment if we believe it is necessary. We will post the modified agreement on the Website with notice of the changes if these Terms are changed. Following such notification, your continuing use of the Website and/or Services shall represent your affirmative recognition of the Terms, their modification, and your commitment to comply and be governed by the Terms, as revised. Do not use the Website or the Services if you choose not to accept these Terms at any time, including after receiving notice of any amendments.



License And Access
PokerGeniee.com henceforth grants you a restricted, quasi, voidable license to use the Website as set forth in the Terms; offered, however, that:
1) you will not copy, distribute, or create derivative works of the Website in any form or media without our express written authorization;
2) you will not change or tweak any part of the Website other than as would be appropriate and necessary to use the Website for the purposes intended, and
3) you would otherwise act in line with the Agreement.



Restricted Locations
Only persons currently residing in India are eligible to play the Mobile Games and use the Platform's services. Participation in any Mobile Games on the Platform is restricted for residents of Assam, Odisha, Nagaland, Andhra Pradesh, Gujrat, and Telangana ("Restricted States"). We (the company) will not be held liable for any user who knowingly or unknowingly plays in games that are prohibited in the states stated.

USE OF EXTERNAL PLAYER ASSISTANCE PROGRAMS AND HEADS UP DISPLAYS
External Player Aid Programs, Vpn, and Heads Up Displays that are meant to give any User an unfair advantage are prohibited by the company. The User agrees that any information on other players that is not acquired from the User's own game play is an unfair advantage. You acknowledge and agree that The Company may take efforts to detect and block the use of this software, hardware, or other external devices or applications. These steps may also include, but are not limited to, examination of software programs running concurrently with the Software on the User's computer, examination of use of VPN devices, Player assistance programs, Geo position data, or any other action required by the company to maintain the Software's functionality.



USE OF AUTOMATIC PLAYER SOFTWARE OR HARDWARE
The use of Artificial intelligence, including "robots" or "bots" or any other types of external digital assistance devices, is expressly prohibited by Users in connection with the Service. The company will take any and all steps required to prevent or stop such conduct, including, but not limited to, blocking access to the website permanently, freezing money, or taking any other action it deems appropriate. All activities taken by a User in regard to the Service must be carried out personally by the user using the firm's user interface in the way intended by the company exclusively.



CHIP-DUMPING ACTIVITIES
When a User purposefully loses a hand in order to transfer his chips to another User, this is known as chip-dumping. Any User who chip-dumps or attempts to chip-dumps with another User, or who benefits from such activities performed by another User while using the Service, may be permanently barred from using the Service and their account may be cancelled without notice and without refund. In such cases, the firm will be under no responsibility to refund any funds that may have been in the accounts of such Users at the time, and the Website will have the right to pursue legal action against the offending player.



FRAUDULENT BEHAVIOR
If the website determines that a User has engaged or attempted to engage in fraudulent, unlawful, dishonest, or improper activity while using the Service, or any other game manipulation, or the making of any fraudulent payment, including, but not limited to, the use of a stolen credit card or fraudulent chargeback. The company shall be entitled to take whatever action it deems appropriate, including but not limited to:
The company shall be entitled to take whatever action it deems appropriate, including but not limited to:
1. instantly blocking a user's access to the Service;
2. terminating a user’s account with the website;
3. confiscating the funds in a user’s account; disclosing such information (including the User's identity) to financial institutions, relevant authorities, and/or any person or entity with a legal right to such information; and/or taking legal action.




Wagering
The act of devoting a particular amount of money to a game is known as 'wagering.' A user must wager a minimum of 40% of their initial deposit (at every deposit). If a player does not bet at least 40% of their deposit, a platform handling fee of 10% will be applied to the entire amount of withdrawals made without reaching the wagering requirements.
Please do not use this platform if you do not want to gamble 40% of your deposit amount before withdrawing your funds.
Winnings, if any, are subject to taxation under the rules and regulations of the Indian government.



User Validation
The 'User Validation' method applies to every user on PokerGeniee.com. The application's KYC Validation process takes between 24 and 48 hours to validate a first-time user. To guarantee that he or she is above the age of 18, is not playing from a prohibited state, and to verify banking information, a user is required to produce a copy of his or her PAN, address proof copy, and banking details. Without playing the games, this platform cannot be used to deposit or withdraw money. To ensure this, a user's KYC will be authorized only if they have previously played games. If a user does not want to play poker, they should not deposit on this platform. Please send us an email if you have any questions about KYC.



Winnings
- All Contest awards will be pre-declared under the specific regulations applicable to that Contest at the time of registration. Tokens, cash, or promotional products may be used as awards.
- After KYC (Know Your Customer) verification, users can withdraw only cash Winnings from their account to their individual bank/wallet account.
- For withdrawals from Your Account to Your bank/wallet account, KYC verification is required as proof of identity. KYC verification can be completed on the Platform by supplying the following information: I a photo of a valid government ID (Aadhaar Card, Driving License, PAN Card, Voter Card, Driving License, and so on); and (ii) other User Details.
The Company does not provide receipts for Contest submissions. The entries are accounted for in the Platform's Account. It is the duty of the User to guarantee that the entries are genuine and the Winnings are promptly credited to his Account.
Any applicable tax/levy/duty, etc. on material prizes should be paid by the game-winner. According to TDS (tax deducted at source) rules, 31.2 per cent TDS should be deducted on any winnings over Rs.10,000/- in a single game in India.</p>

      
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




