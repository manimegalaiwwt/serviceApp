import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import {db} from '../Firebase'
import { push, ref } from 'firebase/database'
import serviceVideo from '../assets/serviceVideo.mp4'

export default function ContactBox() {
  const [error, setError] = useState()
  const [emailError, setEmailError] =useState("")
  const [formData, setFormData] =useState({
    name: "",
    email: "",
    mobile: "",
    problem: ""
  })

  const handleChange=(e)=>{
    const {name, value} =e.target;
    if (name ==="name" || name ==="problem"){
      if (!/^[a-zA-Z\s]*$/.test(value)) return
    }

    if (name =="mobile"){
      if (!/^[0-9]*$/.test(value)) return
    }
    if (name =="email"){
      const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailPattern.test(value)){
        setEmailError("Please Enter a valid email address")
      }
      else{
        setEmailError("")
      }
    }
    setFormData({
      ...formData, 
      [name] : value
    })
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    //email verification
    const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(formData.email)){
      alert("Please enter a valid email address")
      return
    }
    //phone number verification
    if(formData.mobile.length !== 10){
      alert("Mobile number must be 10 digits");
      return
    }

    try {
      await push(ref(db, "contacts"),{
        ...formData,
        createdAt:new Date().toISOString()
      })
      alert("Form submitted successfully")
      setFormData ({
        name: "",
        email:"",
        mobile: "",
        problem:""
      })
    } catch (error) {
      console.log("Error saving data", error)
    }
  }

  const isFormValid=
     formData.name.trim() !=="" &&
     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)&&
     formData.mobile.length===10
  

  return (
    <div className='right'>
        <div className='card'>
        <h3 className='title'>CONTACT US</h3>
        <input type='text' 
        placeholder='Name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required>
        </input>
        <input type='email' 
        placeholder='Email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required/>
        {emailError && (
        <p style={{ color: "red", fontSize: "9px", marginTop: "-10px" }}>
        {emailError}
        </p>
        )}
        <input type="text" 
        placeholder="Mobile"
        maxLength={10}
        name='mobile'
        value={formData.mobile}
        onChange={handleChange}
        required/>
        <textarea placeholder='Description of Problem'
        value={formData.problem}
        onChange={handleChange}
        name='problem'
        required>
        </textarea>

        <button onClick={handleSubmit} disabled={!isFormValid}>SUBMIT</button>

        {/* <div className='adress'>
          <h4>ADDRESS & PHONE</h4>
          <p>PML SERVICES</p>
          <p>All City in Tamilnadu</p>
          <p className="red">+91 - 123456789</p>
        </div> */}
        {/* <div className='video-section'>
           <video
            width="100%"
            height="400"
            controls autoPlay={true} muted>
              <source src={serviceVideo} type="video/mp4" />
           </video>
        </div> */}
        </div>
    </div>
  )
}
