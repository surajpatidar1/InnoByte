import React from 'react'
import './Index.css'
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
  return (
    
<div className='container'>
         <div className="home">
              <div className="header">
                  <div >
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
                  <div className='left'><button className="header-btn">Book Now</button></div>
           
                </div>
                <div className="content">
                    <p className='top'>Simple - Unique - Friendly</p>
                    <p className='bottom'>Make Yourself At Home <br />
                         In Our <span>Guest House</span> .</p>
                 </div>
                <div className="fly">
                  <button className='fly-btn'>Book Now</button>
                </div>
        </div>

       {/*About*/ }

       <div className="about" id='about'>
           <div className='img-div'>
            
            <img src="/out.jpg" className='img' alt="" />
           
                
                <div className="about-content">
                    <h3>ABOUT US <span> — </span></h3>
                    <p className='black'>The Best Holidays Start Here!</p>
                    <p className='white'>Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                    <p><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
                    Address:  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a>
                    </p><br />
                       <p><a href="#">Contact us: +91 9007062180</a></p>
                       <button className='about-btn'>Book Now</button>
                </div>
               
           </div>
       </div>
       
               {/*Rooms*/ }

        <div className="rooms" id='rooms'>
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
              <button className='room-btn'>Book Now</button>
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
              <button className='room-btn'>Book Now</button>
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
              <button className='room-btn'>Book Now</button>
            </div>
            
          </div>
  
        </div>

   {/**services */}
        <div className="services" id='services'>
          <div className="service-content">
          <h3 className='service-head'>SERVICES &nbsp;&nbsp;<span>—</span></h3>
          <p className='service-p'>Strive Only For The Best.</p>
          <div className="service-icons">
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
            <h3 className='gallary-head'>Gallary &nbsp;&nbsp;<span>—</span></h3>
           <div className="gallary-images">
             <div className="gallery-img">
               <img src="/baranti.webp" alt="" id='id-1' />
               <img src="/palash.webp" alt=""id='id-2' />
               <img src="/flower.jpg" alt="" id='id-5' />
               <img src="/ayodhya.webp" alt="" id='id-3'/>
               <img src="/out.jpg" alt="" id='id-10' />
               <img src="/1.jpg" alt="" id='id-4' />
               <img src="/mithonDam.webp" alt="" id='id-6' />
               <img src="/service.jpg" alt="" id='id-7' />
               <img src="/header.jpg" alt="" id='id-8'/>
               <img src="/recep.jpg" alt="" id='id-9' />
           
              </div>
            </div>
        </div>

        {/**contact */}
        <div className="contact">
           <div className="contact-left">
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
           <div className="contact-form">
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
                 <button type='Submit' className='contact-btn'>Send</button>
             </div>
           </div>

          </div>
</div>
  
  );
};

export default Index
