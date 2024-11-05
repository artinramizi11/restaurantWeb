import React from 'react'
import Signup from './Components/Sign Up/Signup'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

const SignupPage = () => {
  return (
    <>
    <Nav />
   <div style={{padding:"30px"}}>
   <Signup />
   </div>
    <Footer />
    
    </>
  )
}

export default SignupPage