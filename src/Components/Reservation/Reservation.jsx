import React from 'react'
import reservationImage from '../../assets/images/reservedimage.png'
import ReservationForm from './ReservationForm'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import gallery3 from '../../assets/images/gallery3.jpg'
import gallery4 from '../../assets/images/gallery4.jpg'
import gallery5 from '../../assets/images/gallery5.jpg'
import Gallery from '../Gallery'


const Reservation = () => {
  return (
    <div style={{padding:"40px"}}>
      <div style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
      <h1 style={{borderTop:'1px solid orange',borderBottom:"1px solid orange"}}>Reservation</h1>
      <h4>Book the seat now here easily</h4>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:"15px"}}>
      <img style={{width:"100%",height:"100%"}} src={reservationImage}  alt='reservationImage' />
      <ReservationForm />

  

      </div>


    <Gallery />


    </div>
  )
}

export default Reservation