import React from 'react'
import './About.css'


const about = () => {
  return (
    
       <div className="about" id='about'>
           <div className='img-div'>
            
            <img src="/out.jpg" className='img' alt="" />
           
                
                <div className="about-content" >
                    <h3 data-aos="fade-up"  >ABOUT US <span> — </span></h3>
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
  )
}

export default about
