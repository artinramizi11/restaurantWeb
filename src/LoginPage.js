import React from 'react'
import Nav from './Components/Nav/Nav'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'

const LoginPage = () => {
  return (
   <>
   <Nav />
  <div style={{padding:'20px'}}>
  <Login />
  </div>
   <Footer />
   </>
  )
}

export default LoginPage