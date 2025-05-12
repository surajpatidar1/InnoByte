import React from 'react'
import './Services.css'

import { RiShieldStarFill } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

const Services = () => {
  return (
    <div>
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
    </div>
  )
}

export default Services
