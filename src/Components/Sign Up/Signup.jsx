import React from 'react'
import { Link } from 'react-router-dom'
import '../Sign Up/Signup.css'

const Signup = () => {
  return (
    <div className='signup' style={{backgroundColor:'#FFF6EA',padding:"50px",display:'flex',alignItems:"center",flexDirection:"column",gap:"10px"}}>
        <p>S I G N U P</p>
        <p>Let's Start Your Dinner With Us</p>
        <form style={{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:'30px',gap:"10px"}}>
                <input type='text' placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="phone"  placeholder='Phone Number'/>
                <input type="password" placeholder='Password' />
                <textarea placeholder='Address'></textarea>
                <input type='text' placeholder='ZIP Code'  />
        </form>
        <button>SIGNUP</button>
        <p>Already have an acount? <Link to='/login' style={{color:"orange"}}>Login</Link></p>
    </div>
  )
}

export default Signup