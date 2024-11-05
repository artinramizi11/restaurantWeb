import React, { useState } from 'react'
import '../Contact Us/Contact.css'
import Message from '../Message/Message'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const Navigate = useNavigate()


const handleChange = (e) => {
e.preventDefault()
Navigate('/submitted')

}


  return (
    <div className='contact' style={{display:'flex',flexDirection:'column',alignItems:'center',padding:"40px",backgroundColor:'#FFF6EA'}}>
      <p style={{textAlign:"center",borderTop:'1px solid orange',borderBottom:'1px solid orange'}}>CONTACT US</p>
        <h1>Send Valuable Feedback To Us</h1>
        <form onSubmit={handleChange}>
            <div className="nameAndEmail">
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
            </div>
            <div className="subjectAndPhone">
                <input type='text' placeholder='Subject' />
                <input type='text' placeholder='Phone' />
            </div>
            <textarea placeholder='Message'></textarea>
            <button>Send</button>
        </form>
    </div>
  )
}

export default Contact