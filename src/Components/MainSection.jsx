import React from 'react'
import ContactBox from './ContactBox'
//import washingMachine from '../assets/washingMachine.png'
import fridge from '../assets/OIP.jpg'
import washingMachine from '../assets/home_app.png'

export const MainSection = () => {
  return (
    <div className='main'>
        <div className='left'>
        <div className='card'>
        <h2 className='title'>PLM SERVICES</h2>
        <p>
        Are you looking for washing machine, air conditioner, refrigerator, television, microwave oven, or dishwasher service in Chennai? You're in the right place! Just fill the form or call us, and we'll do the rest. Our inspection charges are very low compared to other service providers in Chennai. 
        Our service support is designed to make you feel comfortable and reliable.
        </p>
              <p>
         We offer the best services in Chennai for all areas, and we attend to calls within 2 hours. Once you place a service request, you'll be notified via SMS or WhatsApp with service request order details, 
        along with the technician's mobile number who will attend to your service request.
        </p>
        <p>
         Our service request system is very secure and convenient. We offer a 30-day warranty on our services, 
         ensuring the best work done by our technicians. 
         Our customer service team guarantees continued support and follow-ups, as we care for your units.
        </p>

        <div className='video-section'>
          <iframe
            width="100%"
            height="330"
            src="https://www.youtube.com/embed/X8Ew-bDF2KE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>

        <h3 className='service-title'>Washing Machine Repair Services</h3>
        <div className='service-row'>
        <ul className='service-list'>
           <li>Washing Machine 8 kg Semi Automatic Top Loading</li>
           <li>Washing Machine 6.2kg Fully Automatic Top Loading</li>
           <li>Washing Machine 6.5kg Automatic Front Loading</li>
           <li>Washing Machine 7kg Fully Automatic Top Loading</li>
           <li>Washing Machine 8kg Fully Automatic Front Loading</li>
           <li>Washing Machine 6.2kg Fully Automatic Top Loading </li>
           <li>All Other Models</li>

        </ul>
        <div className='service-image'>
          <img src={washingMachine} alt="Washing Machine" className='service-img'></img>
        </div>
        </div>
        <h3 className='service-title'>Refrigerator Repair Services</h3>
        <div className='service-row'>
        <ul className='service-list'>
           <li>Fridge 185 Litre Single Door</li> 
           <li>Fridge 80 Litre Single Door</li> 
           <li>Fridge 604 Litre Side By Side</li> 
           <li>Fridge 407 Litre Double Door</li> 
           <li>Fridge 45 Litre Single Door</li>
           <li>Fridge 390 Litre Triple Door</li>
           <li>Fridge 638 Litre Side by Side</li> 
        </ul>
        <div>
            <img src={fridge} alt="Fridge" className='service-img-fridge'></img>
        </div>
        </div>
        <div>
            <h2 className='title'>For More information For Direct Vist, Estimate, Repair Services.</h2>
            <p>If you are searching for “Home appliances service near me”, we are just one call away!</p>
            <p><strong>WhatsApp/call - 9342232571 /9344600166</strong></p>
        </div>
        </div>
        </div>
        <ContactBox/>
    </div>
  )
}
