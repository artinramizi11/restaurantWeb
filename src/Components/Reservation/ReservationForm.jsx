import React from 'react'
import { Link } from 'react-router-dom'

const ReservationForm = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:"20px",justifyContent:'start',padding:'30px'}}>
        <p style={{borderTop:'1px solid orange',borderBottom:"1px solid orange",width:'100px'}}>Reservation</p>
        <h4 style={{fontSize:'3rem'}}>Book your table now</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, illo! Amet, pariatur exercitationem.</p>
        <form style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:"20px"}}>
            <input style={{padding:'20px'}} type="text" placeholder='Name' />
            <input style={{padding:'20px'}} type="email" placeholder='Email' />
            <input style={{padding:'20px'}} type="phone" placeholder='Phone' />
            <input style={{padding:'20px'}} type="date" placeholder='Date'/>
            <input style={{padding:'20px'}} type="time" placeholder='Time'/>
            <input style={{padding:'20px'}} type="text" placeholder='Person' />
        </form>
        <Link to='/booktable'>        <button style={{width:"200px",padding:"10px",backgroundColor:'orange',border:'none',borderRadius:'10px',cursor:"pointer"}}>Book a Table</button>
        </Link>
    </div>
  )
}

export default ReservationForm