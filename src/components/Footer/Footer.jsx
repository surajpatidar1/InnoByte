import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer >
          <div className="bg-primaryPink text-white mt-12 flex flex-col gap-3">
             <div className="mt-5 w-[40vh]">
              <img src="/logoo.png" alt="" className='w-20 rounded-full mx-auto mb-5 '/>
              <p className='text-md ml-16'>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
              <button className='bg-white p-2 my-2 ml-16 rounded-md text-primaryPink' >Book Now</button>
             </div>
             <div className="mt-5 w-[40vh]">
              <h5 className='text-2xl text-white ml-16 mb-6'>QUICK LINKS</h5>
              <p className="text-md ml-16"><a href="#">Browse Destinations</a></p>
              <p className="text-md ml-16"><a href="#">Special Offers & Packages</a></p>
              <p className="text-md ml-16"><a href="#">Room Types & Amenities</a></p>
              <p className="text-md ml-16"><a href="#">Customer Reviews & Ratings</a></p>
              <p className="text-md ml-16"><a href="#">Travel Tips & Guides</a></p>
             </div>
             <div className="mt-5 w-[40vh]">
              <h5  className='text-2xl text-white ml-16 mb-6'>OUR SERVICES</h5>
              <p className="text-md ml-16"><a href="#">Concierge Assistance</a></p>
              <p className="text-md ml-16"><a href="#">Flexible Booking Options</a></p>
              <p className="text-md ml-16"><a href="#">Airport Transfers</a></p>
              <p className="text-md ml-16"><a href="#">Wellness & Recreation</a></p>
             </div>
             <div className="mt-5 w-[40vh]">
              <h5  className='text-2xl text-white ml-16 mb-6'>CONTACT US</h5>
              <p className="text-md ml-16"><a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></p>
              <p className="text-md ml-16">kkghosh0099@gmail.com</p>
              <p className="text-md ml-16">+91 9007062180</p>
              <div className="flex gap-5 items-center justify-center my-5">
                <img src="/facebook.png" alt="" className="w-6 h-6" />
                <img src="/instagram.png" alt="" className="w-6 h-6" />
                <img src="/youtube.png" alt="" className="w-6 h-6" />
                <img src="/twitter.png" alt="" className="w-6 h-6" />
              </div>
             </div>
            </div>
            <p className='text-sm text-primaryPink'>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
         </footer>
    </div>
  )
}

export default Footer
