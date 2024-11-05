import React from 'react'
import gallery1 from '../assets/images/gallery1.jpg'
import gallery2 from '../assets/images/gallery2.jpg'
import gallery3 from '../assets/images/gallery3.jpg'
import gallery4 from '../assets/images/gallery4.jpg'
import gallery5 from '../assets/images/gallery5.jpg'

const Gallery = () => {
  return (
    <>  <div style={{display:'flex',flexDirection:"column",alignItems:'center',marginTop:"30px"}}>
    <p style={{borderTop:"1px solid orange",borderBottom:'1px solid orange'}}>Gallery</p>
    <h1>What Can You Expect From Us</h1>
  </div>


 <div style={{display:'flex',gap:"10px",marginTop:"40px",justifyContent:"center"}}>
  <div style={{display:'flex',flexDirection:'column',gap:"10px"}}>
    <img src={gallery1} />
    <img src={gallery2} />
  </div>

  <div>
    <img src={gallery3} />
  </div>
  <div style={{display:'flex',flexDirection:'column',gap:"10px"}}>
    <img src={gallery4} />
    <img src={gallery5} />
  </div>
  </div>
    
    </>
  )
}

export default Gallery