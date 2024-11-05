import React from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login' style={{display:'flex',alignItems:'center',flexDirection:"column",gap:"20px",backgroundColor: '#FFF6EA',padding:"20px"}}>
        <p style={{borderTop:'1px solid orange',borderBottom:"1px solid orange"}}>L O G I N</p>
        <p>Let's Start Your Dinner With Us</p>
        <form style={{display:'flex',flexDirection:'column',gap:"20px"}}>
            <input type='text' placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button syle={{width:'100%',cursor:"pointer"}}>LOGIN</button>
        <p style={{textAlign:"center"}}>or</p>
        <p style={{border:'1px solid orange',borderRadius:'10px',padding:'10px',textAlign:"center"}}>Login with Google Account</p>
       <div style={{display:'flex',gap:"2px"}}>
       <p>Dont have an account? </p> <Link to='/signup' style={{color:'orange',cursor:'pointer'}}>Signup</Link>
       </div>
        </form>
    </div>
  )
}

export default Login