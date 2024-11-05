import React, { useState } from "react";
import '../SelectedItem/SelectedItem.css'
import Description from "./Description";
import Reviews from "./Reviews";
import { Link, useParams } from "react-router-dom";
import Items from "../../items";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import RelatedDishes from "../RelatedDishes/RelatedDishes";

const SelectedItem = () => {

  const {name} = useParams()

  const item = Items.find((item) => item.name === name)

  const[choose,setChoose] = useState('')

  return (

   <>
    <Nav />
    <div style={{padding:"50px"}}>
      <div className="item">
        <div className="image">
          <img src={item.image} />
        <div className="btns">
        <select name="" id="">
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
        <option value="1">5</option>
        <option value="1">6</option>

      </select>
      <Link to={`/order/${item.name}`}>      <button>Order Now</button>
      </Link>
        </div>
        </div>
        <div className="text">
          <h1>{item.name}</h1>
          <p>${item.price}</p>
        <p>{item.description}</p>
        <p><span>CATEGORY: </span> {item.category}</p>
        </div>
      </div>

      <div className="descriptionAndReviews">
       <div style={{display:'flex',gap:"20px",marginTop:'50px',cursor:"pointer"}}>
        <h4 onClick={() => setChoose('desc')} style={{color: choose === 'desc' ? 'orange' : 'black'}}>DESCRIPTION</h4>
       <h4 onClick={() => setChoose('reviews')} style={{color: choose === 'reviews' ? 'orange' : 'black'}}>REVIEWS(0)</h4>
       </div>
       {choose === 'desc' && <Description active='yes' item={item} /> }
       {choose === 'reviews' && <Reviews active='yes' />}
      </div>

      <RelatedDishes category={item.category} />
     
    </div>
    <Footer />
    </>
  );
};

export default SelectedItem;
