import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaFillDrip } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";

const Rooms = () => {
  return (
    <div>
      <div className="" data-aos="fade-up" id='rooms'>
          <h3 className='text-md ml-10 font-medium'>OUR LIVING ROOM<span className='text-primaryPink'> — </span></h3>
          <p className='text-2xl m-5'>The Most Memorable Rest <br />Time Starts Here.</p>
          <div className="">
            <div className="bg-slate-200 rounded-lg mb-5">
              <img src="/small.jpg" alt="" className='w-[50vh] ml-5 py-3 rounded-lg' />
              <div className='mt-[-10] ml-5 flex gap-2'>
             <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              
              <p className='room-p'>Cozy Haven Room</p>
              <p className='room-p2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. <br /><br />
              Starting from  &nbsp; <span>Rs. 1000/night </span> </p>
              <button className='bg-primaryPink p-2 my-2 rounded-md text-white ml-5' id='hover'>Book Now</button>
            </div>
            <div className="bg-slate-200 rounded-lg mb-5">
              <img src="/room1.jpg" alt=""  className='w-[50vh] ml-3 py-2 rounded-lg'/>
              <div className='mt-[-8] ml-5 flex gap-2'>
              <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              <p className='room-p'>Spacious Serenity Suite</p>
              <p className='room-p2'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets elegance. <br /><br />
              Starting from  &nbsp; <span>Rs. 1500/night</span></p>
              <button className='bg-primaryPink p-2 my-2 rounded-md text-white ml-5' id='hover'>Book Now</button>
            </div>
            <div className="bg-slate-200 rounded-lg mb-5">
              <img src="/large.jpg" alt=""  className='w-[50vh] ml-5 py-2 rounded-lg'/>
              <div className='mt-[-8] ml-5 flex gap-2'>
              <FaHeart className='icon-1'/>
             <FaFillDrip className='icon-2'/>
             <RiShieldStarFill className='icon-3'/>
              </div>
              <p className='room-p'>Spacious Serenity Suite</p>
              <p className='room-p2'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets elegance. <br /><br />
              Starting from  &nbsp; <span>Rs. 1500/night</span></p>
              <button className='bg-primaryPink p-2 my-2 rounded-md text-white ml-5' id='hover'>Book Now</button>
            </div>
            
          </div>
  
        </div>
    </div>
  )
}

export default Rooms
