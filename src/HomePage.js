import React from 'react'
import Nav from './Components/Nav/Nav'
import Section1 from './Components/Section1/Section1'
import PopularDishes from './Components/PopularDishes/PopularDishes'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Team from './Components/Team/Team'
import Gallery from './Components/Gallery'

const HomePage = () => {
  return (
    <>
    <Nav />
    <Section1 />
    <PopularDishes />
    <Testimonials />
    <div style={{marginBottom:"100px"}}>
    <Gallery />
    </div>
    <Footer />
    </>
  )
}

export default HomePage