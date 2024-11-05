import React from 'react'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact Us/Contact'
import Footer from './Components/Footer/Footer'

const ContactPage = () => {
  return (
    <>
    <Nav />
    <div style={{padding:'20px'}}>
    <Contact />
    </div>
    <Footer />
    </>
  )
}

export default ContactPage