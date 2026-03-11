
import React from 'react'
//import washingMachine from '../assets/washingMachine.png'
import fridge from '../assets/OIP.jpg'
import washingMachine from '../assets/fridge.png'
import ContactBox from '../Components/ContactBox'

export default function Terms() {
  return (
    <div className='main'>
        <div className='left'>
        <div className='card'>
        <h2 className='title'>Terms and Conditions</h2>
        <div className='service-row'>
        <ul className='service-list'>
          <li>We provide a 30-day warranty for services</li>
          <li>Best price guarantee</li>
          <li>If you avail the service, there's no inspection charge; you only pay the service charge</li>
          <li>If not availing the service, you'll be charged an inspection fee</li>
          <li>Service charge = labour charges + spare parts/consumable charges</li>
          <li>For online payments, there's no charge for amounts less than ₹2000; for amounts above ₹2000, a 2% + GST payment gateway fee applies</li>
          <li>Service charge starts at ₹149/- only</li>
        </ul>
        </div>
       
 </div>
 
    </div>
    <ContactBox/>
    </div>
    
  )
}