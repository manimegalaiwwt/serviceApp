
import React from 'react'
//import washingMachine from '../assets/washingMachine.png'
import fridge from '../assets/OIP.jpg'
import washingMachine from '../assets/fridge.png'
import ContactBox from '../Components/ContactBox'

export default function Service() {
  return (
    <div className='main'>
        <div className='left'>
        <div className='card'>
        <h2 className='title'>PLM SERVICES</h2>
        <p>
        <strong>UltraClean - Clean Clothes Start with a Healthy Machine.</strong>  
          We are a trusted washing machine and home appliances service center in Chennai, offering reliable and affordable repair and maintenance solutions. Our services include washing machine servicing and tub cleaning, add-on filter installation, microwave oven repair, dishwasher service, air conditioner repair, refrigerator service, and television repair.
        </p>

        <p>
          Our trained and experienced technicians provide fast doorstep service across Chennai and surrounding areas, especially Poonamallee. We service all major brands such as LG, Samsung, IFB, Bosch, Whirlpool, Haier, and more. With transparent pricing and an inspection charge of just ₹299, we ensure quality service you can rely on. If you’re searching for “home appliances service near me,” UltraClean is just one call or WhatsApp away.
        </p>

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
