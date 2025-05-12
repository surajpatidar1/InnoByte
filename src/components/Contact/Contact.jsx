import React from 'react'
import './Contact.css'

import { BsFillPinMapFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
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
        </div></>
  )
}

export default Contact
