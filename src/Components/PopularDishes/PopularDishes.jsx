import React from 'react'
import items from '../../items'
import Item from '../Item'
import { Link } from 'react-router-dom'

const PopularDishes = () => {

    const filtered = items.filter((item) => item.popular)
  return (
    <div style={{padding:'50px',display:'flex',flexDirection:'column',gap:'20px',alignItems:"center"}}>
       <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:'15px'}}>
       <p style={{borderTop: '1px solid orange',borderBottom:'1px solid orange'}}>MENU</p>
        <h1>Popuar Dishes</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, placeat.</p>
       </div>
       <div style={{display:'flex',gap:'40px',justifyContent:'center',marginTop:'30px'}}>
       {filtered.map((item) => {
            return <Item item={item} />
        })}
       </div>

<Link to='/searchItems'>       <button style={{padding:"10px",width:"200px",color:'black',backgroundColor:"orange",border:"none",borderRadius:'5px',cursor:"pointer"}}>See all dishes</button>
</Link>
    </div>
  )
}

export default PopularDishes