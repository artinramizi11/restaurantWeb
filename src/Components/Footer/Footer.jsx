import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="contact" style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
            <p>Contact</p>
            <p>Gjilan,Kosovo</p>
            <p><span>Call</span> +45735382</p>
            <span>artin11@outlook.com</span>        </div>
        <div className="subscribe" style={{display:'flex',flexDirection:'column',gap:'30px'}}>
           <div style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
           <p>Artini's Restaurant</p>
            <p>Join our mailing list for updates</p>
            <p>Get news & offers events.</p>
           </div>
            <form>
                <input type='email' placeholder='Email' />
                <button>Subscribe</button>
            </form>
            <p>@ Copyright - <span>RestoNest</span> 2024 | Designed by Susmitha Shettigar</p>
            <span>Code From Scratch By Artin Ramizi Using <span style={{color:'blue'}}>REACT</span></span>
        </div>
        <div className="workingHours" style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
            <div className="socialMedia" style={{display:'flex',gap:"10px"}}>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Pinterest</p>
            </div>
            <p>Working Hours</p>
            <p><span>Mon - Fri:</span> 7.00am - 10.00pm</p>
            <p><span>Sat:</span> 7.00am - 6.00pm</p>
            <p><span>Sun:</span>8.00am - 6.00pm</p>
        </div>
    </div>
  )
}

export default Footer