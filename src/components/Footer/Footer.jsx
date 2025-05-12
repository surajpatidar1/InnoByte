import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer >
          <div className="footer">
            <div className="part-1">
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
            </div>
            <div className='part-2'>
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
             
            </div>
            <hr />
            <p className='copyright'>Copyright © 2024 Kingsukh Guest House. <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All rights reserved.</p>
         </footer>    
  )
}

export default Footer
