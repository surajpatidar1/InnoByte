import { BsFillPinMapFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
       <div className="mt-16 bg-primaryPink" id='contact'>
           <div className="bg-primaryPink rounded-lg w-[50vh] h-[90vw] mx-auto" data-aos="fade-left">
            <h1 className='text-2xl text-white mx-16'>Contact Info</h1>
            <p className='text-lg text-white mx-10 my-3'><BsFillPinMapFill className='text-lg ml-5'/> <span className="text-md text-white" >Beside Barshal Water Tank,Manpur, Barhanti,West Bengal 723156</span></p>
            <p className='text-lg text-white mx-10 my-3'><IoIosMailOpen className='text-lg ml-5'/><span className="text-md text-white">kkghosh0099@gmail.com </span></p>
            <p className='text-lg text-white mx-10'><MdPhoneInTalk className='text-lg ml-5'/> <span className="text-md text-white">+91 9007062180</span></p>
            <div className="flex font-semibold text-white justify-center gap-5 items-center mt-10">
              <FaFacebook className='contact-footer-icon'/>
              <FaInstagram className='contact-footer-icon'/>
              <FaXTwitter className='contact-footer-icon'/>
              <FaLinkedinIn className='contact-footer-icon'/>
            </div>
           </div>
           <div className="w-[50vh] h-[110vw] mt-12 shadow-2xl shadow-slate-600 mx-auto bg-white rounded-lg" data-aos="fade-right">
              <h2 className='text-lg text-primaryPink ml-12'>Send a Message</h2>
             <div className="flex">
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
             <div className="flex">
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
                 <button type='Submit' className='bg-primaryPink py-4 px-16 my-2 mx-16 rounded-md text-white' id='hover'>Send</button>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Contact

