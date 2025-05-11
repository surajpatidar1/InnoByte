import React, { useEffect } from 'react'
import './Index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Gallary from '../components/Gallary/Gallary';
import Map from '../components/Map/Map'
import Rooms from '../components/Rooms/Rooms';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer'

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

<div className='container '>
        <div
              style={{ backgroundImage: "url('/ayodhya.webp')" }}
              className="bg-cover bg-center min-h-screen">

          <div className=" flex justify-evenly bg-primaryPink">
             <div data-aos="fade-right flex justify-center items-center ">
                <img
                    src="/logoo.png"
                    alt="Logo"
                    className="w-14 rounded-full mt-10 "/>
             </div>
             

            <div className="option ">
               <ul className="flex flex-col">
                   <li><a href="#">Home</a></li>
                   <li><a href="#about">About</a></li>
                   <li><a href="#services">Services</a></li>
                   <li><a href="#rooms">Rooms</a></li>
                   <li><a href="#gallary">Gallery</a></li>
                   <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="">
             <button
                   className="hidden">
                    Book Now
             </button>
           </div>
          </div>
           <div className="flex justify-center items-center">
             <div className='mt-24'>
                 <p className="text-slate-300 text-md ml-12" data-aos="fade-up">Simple - Unique - Friendly</p>
                 <p className="text-white mt-2 font-semibold text-3xl" data-aos="fade-up" >Make Yourself At Home <br />
                          In Our <span className="">Guest House</span>.
                 </p>
             </div>
           </div>

           <div  className="bg-white flex justify-center items-center mt-[80%]">
            <button
                 className="bg-primaryPink p-2 my-2 rounded-md text-white">
                    Book Now
            </button>
           </div>
         </div>

       <About id="about" />
       <Rooms id="rooms"/>
       <Services id="services"/>        
       <Gallary id="gallary"/>
       <Map/>
       <Contact id="contact"/>
       <Footer />
         
             
</div>
  
  );
};

export default Index
