import React from 'react'

const Map = () => {
  return (
    <div>
       <div className=''>
             <iframe
                title="Google Map"
                 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1746876533029!5m2!1sen!2sin"  
                width="100%"
               height="100%"
               style={{ border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" className='map-frame'>
             </iframe>
         </div>  
    </div>
  )
}

export default Map
