import React, { useEffect } from 'react'
import './Index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart } from "react-icons/fa";
import { FaFillDrip } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
<div className='container'>
         <div className="home">
              <div className="header">
                  <div data-aos="fade-right">
                        <img src="/logoo.png" alt=""className="logo" />
                  </div>
                  <div className="option">
                     <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#rooms">Rooms</a></li>
                        <li><a href="#gallary">Gallary</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                  <div className='left'><button className="header-btn" id='hover'>Book Now</button></div>
           
                </div>
                <div className="content" >
                    <p className='top' data-aos="fade-up">Simple - Unique - Friendly</p>
                    <p className='bottom' data-aos="fade-up">Make Yourself At Home <br />
                         In Our <span>Guest House</span> .</p>
                 </div>
                <div className="fly">
                  <button className='fly-btn' id='hover'>Book Now</button>
                </div>
        </div>

       {/*About*/ }

       <div className="about" id='about'>
           <div className='img-div'>
            
            <img src="/out.jpg" className='img' alt="" />
           
                
                <div className="about-content" >
                    <h3 data-aos="fade-up" >ABOUT US <span> — </span></h3>
                    <p className='black' data-aos="fade-up" >The Best Holidays Start Here!</p>
                    <p className='white' data-aos="fade-up" >Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                    <p data-aos="fade-up" ><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                    Address:  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
                    </p><br />
                       <p data-aos="fade-up" ><a href="#">Contact us: +91 9007062180</a></p>
                       <button className='about-btn' id='hover' data-aos="fade-up" >Book Now</button>
                </div>
               
           </div>
       </div>
       
               {/*Rooms*/ }

        <div className="rooms" data-aos="fade-up" id='rooms'>
          <h3 className='room-head'>OUR LIVING ROOM<span> — </span></h3>
          <p className='room-subhead'>The Most Memorable Rest <br />Time Starts Here.</p>
          <div className="room-cards">
            <div className="card">
              <img src="/small.jpg" alt="" />
              <div className='icon'>
             <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              
              <p className='room-p'>Cozy Haven Room</p>
              <p className='room-p2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. <br /><br />
              Starting from  &nbsp; <span>Rs. 1000/night </span> </p>
              <button className='room-btn' id='hover'>Book Now</button>
            </div>
            <div className="card">
              <img src="/room1.jpg" alt="" />
              <div className='icon'>
              <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              <p className='room-p'>Spacious Serenity Suite</p>
              <p className='room-p2'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets elegance. <br /><br />
              Starting from  &nbsp; <span>Rs. 1500/night</span></p>
              <button className='room-btn' id='hover'>Book Now</button>
            </div>
            <div className="card">
              <img src="/large.jpg" alt="" />
              <div className='icon'>
              <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              <p className='room-p'>Spacious Serenity Suite</p>
              <p className='room-p2'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets elegance. <br /><br />
              Starting from  &nbsp; <span>Rs. 1500/night</span></p>
              <button className='room-btn' id='hover'>Book Now</button>
            </div>
            
          </div>
  
        </div>

   {/**services */}
        <div className="services" id='services'>
              <div className="service-content">
                 <h3 className='service-head' data-aos="fade-left">SERVICES &nbsp;&nbsp;<span>—</span></h3>
                 <p className='service-p'>Strive Only For The Best.</p>
               <div className="service-icons" data-aos="fade-left">
                  <p><RiShieldStarFill className='service-icon-1'/><p className='icon-p'>High Class Security</p><br /></p>
                  <p><TbHours24 className='service-icon-2'/><p  className='icon-p'>24 Hours Room Service</p><br /></p>
                  <p><IoMdRestaurant className='service-icon-3'/><p  className='icon-p'>Restaurant</p><br /></p>
                  <p><FaMapLocationDot className='service-icon-4'/><p  className='icon-p'>Tourist Guide Support</p><br /></p>
               </div>
              </div>
        </div>

        <div className="booking">
          <div className="booking-content">
            <p className='booking-p-1'>100+</p>
            <p className='booking-p-2'>Bookings Completed</p>
          </div>
          <div className="booking-content">
            <p className='booking-p-1'>150+</p>
            <p className='booking-p-2'>Happy Customers</p>
          </div>
        </div>
        
            {/*gallary*/ }

        <div className="gallary" id='gallary'>
            <h3 className='gallary-head' data-aos="fade-left">Gallary &nbsp;&nbsp;<span>—</span></h3>
           <div className="gallary-images">
             <div className="gallery-img">
               <img src="/baranti.webp" alt="" id='id-1' data-aos="fade-left" />
               <img src="/palash.webp" alt=""id='id-2' data-aos="fade-right" />
               <img src="/flower.jpg" alt="" id='id-5'data-aos="fade-up" />
               <img src="/ayodhya.webp" alt="" id='id-3' data-aos="fade-up"/>
               <img src="/out.jpg" alt="" id='id-10' data-aos="fade-up"/>
               <img src="/1.jpg" alt="" id='id-4' data-aos="fade-up" />
               <img src="/mithonDam.webp" alt="" id='id-6' data-aos="fade-up" />
               <img src="/service.jpg" alt="" id='id-7' data-aos="fade-right" />
               <img src="/header.jpg" alt="" id='id-8'data-aos="fade-up" />
               <img src="/recep.jpg" alt="" id='id-9' data-aos="fade-left" />
           
              </div>
            </div>
        </div>

        {/**contact */}
        <div className="contact" id='contact'>
           <div className="contact-left" data-aos="fade-left">
            <h1 className='contact-head'>Contact Info</h1>
            <p className='contact-p'><BsFillPinMapFill className='contact-icon'/> <span>Beside Barshal Water Tank,Manpur, Barhanti,West Bengal 723156</span></p>
            <p className='contact-p'><IoIosMailOpen className='contact-icon'/><span>kkghosh0099@gmail.com </span></p>
            <p className='contact-p'><MdPhoneInTalk className='contact-icon'/> <span>+91 9007062180</span></p>
            <div className="contact-footer">
              <FaFacebook className='contact-footer-icon'/>
              <FaInstagram className='contact-footer-icon'/>
              <FaXTwitter className='contact-footer-icon'/>
              <FaLinkedinIn className='contact-footer-icon'/>
            </div>
           </div>
           <div className="contact-form" data-aos="fade-right">
              <h2 className='form-head'>Send a Message</h2>
             <div className="row">
              <div className="contact-element">
                 <div className="input-wrapper">
                    <input
                         type="text" 
                         placeholder='' 
                         required />
                    <span>First Name</span>
                    <hr />
                 </div>
              </div>

              <div className="contact-element">
                   <div className="input-wrapper">
                      <input
                           type="text" 
                           placeholder='' 
                           required />
                      <span>Last Name</span>
                      <hr />
                   </div>
              </div>
             </div>
             <div className="row">
              <div className="contact-element">
                 <div className="input-wrapper">
                   <input 
                        type="email" 
                        placeholder=''
                         required />
                   <span>Email Address</span>
                   <hr />
                </div>
             </div>

             <div className="contact-element">
               <div className="input-wrapper">
                 <input 
                      type="text" 
                      placeholder='' 
                       required />
                 <span>Mobile Number</span>
                 <hr />
               </div>
             </div> 
             </div>
             <div className="contact-element">
               <div className="input-wrapper " id='textarea'>
                  <textarea 
                  name="message" 
                  placeholder='' 
                  required></textarea>
                  <span>Write Something...</span>
                  <hr />
               </div>
             </div>

             <div className="contact-element">
                 <button type='Submit' className='contact-btn' id='hover'>Send</button>
             </div>
           </div>
        </div>

        {/**map */}
        <div className='map'>
             <iframe
                title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1746876533029!5m2!1sen!2sin"  
                width="100%"
               height="100%"
               style={{ border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className='map-frame'>
             </iframe>
         </div>  

         {/**footer */}  
         <footer >
          <div className="footer">
             <div className="footer-info">
              <img src="/logoo.png" alt="" />
              <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
              <button className='footer-info-btn' >Book Now</button>
             </div>
             <div className="footer-links">
              <h5 className='footer-heading'>QUICK LINKS</h5>
              <p className="footer-link"><a href="#">Browse Destinations</a></p>
              <p className="footer-link"><a href="#">Special Offers & Packages</a></p>
              <p className="footer-link"><a href="#">Room Types & Amenities</a></p>
              <p className="footer-link"><a href="#">Customer Reviews & Ratings</a></p>
              <p className="footer-link"><a href="#">Travel Tips & Guides</a></p>
             </div>
             <div className="footer-services">
              <h5  className='footer-heading'>OUR SERVICES</h5>
              <p className="footer-service"><a href="#">Concierge Assistance</a></p>
              <p className="footer-service"><a href="#">Flexible Booking Options</a></p>
              <p className="footer-service"><a href="#">Airport Transfers</a></p>
              <p className="footer-service"><a href="#">Wellness & Recreation</a></p>
             </div>
             <div className="footer-contacts">
              <h5  className='footer-heading'>CONTACT US</h5>
              <p className="footer-contact"><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></p>
              <p className="footer-contact">kkghosh0099@gmail.com</p>
              <p className="footer-contact">+91 9007062180</p>
              <div className="footer-social">
                <img src="/facebook.png" alt="" className="icon-image" />
                <img src="/instagram.png" alt="" className="icon-image" />
                <img src="/youtube.png" alt="" className="icon-image" />
                <img src="/twitter.png" alt="" className="icon-image" />
              </div>
             </div>
            </div>
            <p className='copyright'>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
         </footer>    
</div>
  
  );
};

export default Index
