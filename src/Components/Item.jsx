import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div key={item.id} style={{border:'1px solid gray',borderRadius:"3px"}}>
        <div className="top">
            <img src={item.image} alt={item.name} />

        </div>
        <div className="bottom" style={{padding:"10px",display:'flex',flexDirection:'column',gap:'10px'}}>
           <div className="title" style={{display:'flex',justifyContent:'space-between'}}>
           <h1>{item.name}</h1>
           <p className='colorOrange'>${item.price}</p>
           </div>
            <p>{item.rating}</p>
            <Link to={`/menu/${item.name}`}><button style={{color:'black',cursor:'pointer',backgroundColor:'orange',border:'none',padding:"3px",width:'100px'}}>Order Now</button></Link>

        </div>
    </div>
  ) 
}

export default Item