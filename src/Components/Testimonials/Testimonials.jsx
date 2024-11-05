import React from 'react'
import Clients from '../../clients'
import Client from '../Client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation } from 'swiper/modules';

import '../Testimonials/Testimonials.css'


const Testimonials = () => {



  return (
    <div style={{padding:'50px',display:'flex',flexDirection:'column',gap:'25px'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'15px',alignItems:'center'}}>
        <p style={{borderTop:'1px solid orange',borderBottom:'1px solid orange'}}>TESTIMONIALS</p>
        <h1>What our clients say</h1>
        <p>We love to hear from customers,so please leave a comment or say hello in an email.</p>
        </div>
       <div>
      <Swiper  spaceBetween={20}
        slidesPerView={1} 
        navigation={true}
        style={{width:"100%"}}
        modules={[Navigation]}
        >
        {Clients.map((client, index) => (
          <SwiperSlide style={{width:"100%"}} key={index}>
            <Client client={client} />
          </SwiperSlide>
        ))}
      </Swiper>
       </div>
    </div>
  )
}

export default Testimonials