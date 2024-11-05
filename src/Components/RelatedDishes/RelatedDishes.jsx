import React from 'react'
import Items from '../../items'
import Item from '../Item'

const RelatedDishes = ({category}) => {

    const items = Items.filter((item) => item.category === category)

    console.log(items)

  return (
    <div>
        <div style={{display:"flex",justifyContent:'space-between',marginTop:"40px",marginTop:"120px"}}>
            <h1 style={{marginBottom:"30px"}}>Related Dishes</h1>
            <button style={{backgroundColor:'orange',marginBottom:'30px',border:'none',width:"200px",borderRadius:'10px'}}>Order Now</button>
        </div>
        <div style={{display:"flex",gap:'20px',flexWrap:'wrap'}}>{items.map((item) => <Item item={item} />)}</div>
    </div>
  )
}

export default RelatedDishes