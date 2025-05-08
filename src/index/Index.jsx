import React from 'react'
import './Index.css'

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

        <div className="rooms">
          <h3 className='room-head'>OUR LIVING ROOM<span> — </span></h3>
          <p className='room-subhead'>The Most Memorable Rest <br />Time Starts Here.</p>
          <div className="room-cards">
            <div className="card">
              <img src="/small.jpg" alt="" />
              <p className='room-p'>Cozy Haven Room</p>
              <p className='room-p2'>Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. <br /><br />
              Starting from  &nbsp; <span>Rs. 1000/night </span> </p>
              <button className='room-btn'>Book Now</button>
            </div>
            <div className="card">
              <img src="/room1.jpg" alt="" />
              <p className='room-p'>Spacious Serenity Suite</p>
              <p className='room-p2'>Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets elegance. <br /><br />
              Starting from  &nbsp; <span>Rs. 1500/night</span></p>
              <button className='room-btn'>Book Now</button>
            </div>
            
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore dicta impedit doloremque aut placeat, facere eveniet sit nobis, molestiae cumque, totam modi voluptas commodi quam quisquam repellat dolore nihil!logo.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni et rem consequatur incidunt aliquid? Laboriosam nisi suscipit aperiam error! Ratione aspernatur culpa, sit odio perferendis ducimus beatae mollitia iure ..
        </div>



    </div>
  )
}

export default Index
