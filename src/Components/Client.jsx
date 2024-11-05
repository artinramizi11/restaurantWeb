import React from 'react'
import icon from '../assets/images/commentIcon.png'

const Client = ({client}) => {
  return (
    <div style={{backgroundColor:'black',padding:"60px",display:'flex',flexDirection:'column',gap:'10px'}}>
        <div style={{display:'flex',gap:'20px',borderBottom:'1px solid white',padding:"15px"}}> 
            <div className="image" style={{position:'relative'}}>
                <img style={{borderRadius:'50%'}} src={client.image} />
                <div style={{position:'absolute',top:"0px"}}>
                <img src={icon} />
                </div>
            </div>
            <div className="text" style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <h1 className='colorWhite'>{client.name}</h1>
                <p className='colorOrange'>{client.status}</p>
            </div>

        </div>
        <p className='colorWhite'>{client.description}</p>
    
    </div>
  )
}

export default Client