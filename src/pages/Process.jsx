import React from 'react'
import ContactBox from '../Components/ContactBox'

export default function Process() {
  return (
    <div className='main'>
    <div className='left'>
    <div className='card'>
        <h1 className='title'>PLM Service Centre</h1>
        <p>We Provide repair services 24 / 7, include Door Step Service</p>
        <div>
            <div className="service-content"></div>
               <h3>Appliance Repair – Step-by-Step Process</h3>
               <p>
               <strong>Step 1 -</strong> Research the problem of your Appliance.
                Based on research try to fix it yourself.
              </p>

               <p>
                <strong>If it's not Work?</strong> Go to next step...
               </p>
               <p>
               <strong>Step 2 -</strong> Get some help. Call the Help Line appliance
                repair experts at{" "}
                <span className="red">+91-90805-11494</span> or submit the below form
                and we will call back within a day.
              </p>
            <div className='service-form'>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Mobile" />
                <textarea placeholder="Description of Problem..." />
                <button className='btn'>SUBMIT</button>
            </div>
            <div className="service-steps">
            <p>
            <strong>Step 3 -</strong> Repair visits are generally set within a same day or next day. You will get a reminder call the day before your appointment.
            </p>

            <p>
            <strong>Step 4 -</strong> Our service expert will reach your location and give estimate after identify your appliance problem. Based on your acceptance our service expert fix your appliance repair within a same day or next day based on repair or problem.
            </p>

            <p>
            <strong>Step 5 -</strong> After fix the appliance problem. Our Help Line Repair Services is always looking to improve Customer Experience.
            </p>
           </div>
           <div>
            <h2 className='title'>For More information For Direct Vist, Estimate, Repair Services.</h2>
            <p>If you are searching for “Home appliances service near me”, we are just one call away!</p>
            <p><strong>WhatsApp/call - 9342232571 /9344600166</strong></p>
        </div>
        </div>
    </div>
    </div>
    <ContactBox/>
    </div>
    
  )
}
