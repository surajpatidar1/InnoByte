import React from 'react'
import { RiShieldStarFill } from "react-icons/ri";
import { TbHours24 } from "react-icons/tb";
import { IoMdRestaurant } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

const Services = () => {
  return (
    <div   id='services'>
      <div  className="bg-cover bg-center h-full mt-10 " style={{backgroundImage:"url('/service.jpg')"}} >
              <div className="w-[50vh] h-[90vw] bg-white m-5">
                 <h3 className='text-lg text-slate-500 ml-5 ' data-aos="fade-left">SERVICES &nbsp;&nbsp;<span className='text-primaryPink'>—</span></h3>
                 <p className='text-lg font-semibold ml-10'>Strive Only For The Best.</p>
               <div className="font-sm " data-aos="fade-left">
                  <p className='flex'><RiShieldStarFill className='service-icon-1'/><p className='icon-p'>High Class Security</p><br /></p>
                  <p className='flex'><TbHours24 className='service-icon-2'/><p  className='icon-p'>24 Hours Room Service</p><br /></p>
                  <p className='flex'><IoMdRestaurant className='service-icon-3'/><p  className='icon-p'>Restaurant</p><br /></p>
                  <p className='flex'><FaMapLocationDot className='service-icon-4'/><p  className='icon-p'>Tourist Guide Support</p><br /></p>
               </div>
              </div>
        </div>

        <div className="flex justify-center items-center mt-12 shadow-md shadow-slate-300 w-[80%] mx-auto">
          <div className="booking-content">
            <p className='text-lg font-semibold flex justify-center items-center'>100+</p>
            <p className='text-sm text-slate-500 mr-5'>Bookings Completed</p>
          </div>
          <div className="booking-content">
            <p className='text-lg font-semibold flex justify-center items-center'>150+</p>
            <p className='text-sm text-slate-500'>Happy Customers</p>
          </div>
        </div>
    </div>
  )
}

export default Services
