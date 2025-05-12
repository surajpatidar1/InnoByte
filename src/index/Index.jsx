import React, { useEffect } from 'react'
import './Index.css'
import AOS from "aos";
import "aos/dist/aos.css";

import About from '../components/About/About'
import Rooms from '../components/Rooms/Rooms'
import Services from '../components/Services/Services'
import Gallary from '../components/Gallary/Gallary'
import Map from '../components/Map/Map'
import Contact from  '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'


const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
<div className='container'>
         <div className="home">
              <div className="header">
                  <div data-aos="fade-right">
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
                  <div className='left'><button className="header-btn" id='hover'>Book Now</button></div>
           
                </div>
                <div className="center">
                <div className="content" >
                    <p className='top' data-aos="fade-up">Simple - Unique - Friendly</p>
                    <p className='bottom' data-aos="fade-up">Make Yourself At Home <br />
                         In Our <span>Guest House</span> .</p>
                 </div>
                 </div>
                <div className="fly">
                  <button className='fly-btn' id='hover'>Book Now</button>
                </div>
        </div>
        <About id='about'/>  
        <Rooms id='rooms'/> 
        <Services id='services'/>
        <Gallary id='gallary'/>
        <Map />
        <Contact id='contact' />
        <Footer />    
</div>
  
  );
};

export default Index
