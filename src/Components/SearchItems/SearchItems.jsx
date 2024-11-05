import React, { useEffect, useState } from 'react'
import Items from '../../items'
import Item from '../Item'
import '../SearchItems/SearchItems.css'

const SearchItems = () => {

  const [filtered,setFiltered] = useState(Items)
  const [search,setSearch] = useState('')


  useEffect(() => {
    const filteredItems = Items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    setFiltered(filteredItems)

  },[search])


  return (
    <div style={{padding:"50px"
    }}>
      <div style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
        <p style={{borderTop:'1px solid orange',borderBottom:"1px solid orange"}}>MENU</p>
      <h1 style={{textAlign:"center"}}>All Dishes</h1>
      </div>
        <div className="input">
            <input onChange={(e) => setSearch(e.target.value)} value={search} type='text' placeholder='Search Here' style={{borderColor:'orange',padding:"10px"}} />

        </div>
        <div style={{display:'flex',gap:"10px",flexWrap:'wrap',marginTop:"30px"}}>
            {filtered.map((item) => <Item key={item.id} item={item} />)}
        </div>
    </div>
  )
}

export default SearchItems