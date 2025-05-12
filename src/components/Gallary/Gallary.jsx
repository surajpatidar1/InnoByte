import React from 'react'
import './Gallary.css'

const Gallary = () => {
  return (
    <div className="gallary" id='gallary'>
                <h3 className='gallary-head' data-aos="fade-left">Gallary &nbsp;&nbsp;<span>—</span></h3>
               <div className="gallary-images">
                 <div className="gallery-img">
                   <img src="/baranti.webp" alt="" id='id-1' data-aos="fade-left" />
                   <img src="/palash.webp" alt=""id='id-2' data-aos="fade-right" />
                   <img src="/flower.jpg" alt="" id='id-5'data-aos="fade-up" />
                   <img src="/ayodhya.webp" alt="" id='id-3' data-aos="fade-up"/>
                   <img src="/out.jpg" alt="" id='id-10' data-aos="fade-up"/>
                   <img src="/1.jpg" alt="" id='id-4' data-aos="fade-up" />
                   <img src="/mithonDam.webp" alt="" id='id-6' data-aos="fade-up" />
                   <img src="/service.jpg" alt="" id='id-7' data-aos="fade-right" />
                   <img src="/header.jpg" alt="" id='id-8'data-aos="fade-up" />
                   <img src="/recep.jpg" alt="" id='id-9' data-aos="fade-left" />
               
                  </div>
                </div>
            </div>
  )
}

export default Gallary
