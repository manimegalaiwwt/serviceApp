import React from 'react'
import ContactBox from '../Components/ContactBox'

export default function About() {
  return (
    <div className='main'>
        <div className='left'>
            <div className='card'>
                <h2 className='title'>ABOUT PML SERVICES</h2>
                <p>
                    We are one of the premier repair service centres in:<strong>Chennai, Coimbatore, Trippur, Madurai, Trichy, Salem, Theni, Dindugul, Puducheri</strong>
                </p>
                <p>
                    We have trained technicians with electronics knowledge and extensive experience in the service field.
                    We are currently operating in:
                    Chennai, Coimbatore, Trippur, Madurai, Trichy, Salem, Theni, Dindugul, Puducheri We offer 24x7 customer care service.
                    Our service area includes all the above cities and extends up to a 100 KM radius from each location to provide repair services.
                </p>
                <p>Our company provides a full spectrum of work of any level of complexity. Our team consists of highly qualified professionals, who have been in the industry for no less than 3 years. We have gained extensive experience while solving the most complex technical</p>
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
