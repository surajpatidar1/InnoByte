import React from 'react'
import './Rooms.css'
import { FaHeart } from "react-icons/fa";
import { FaFillDrip } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";

const Rooms = () => {
  return (
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
  )
}

export default Rooms
