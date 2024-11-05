import React from "react";
import section1image from "../../assets/images/section1image.jpg";
import "../Section1/Section1.css";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="section1 bgSection">
      <div className="leftSide">
        <h1>
          Welcome to <span>Artini's Restaurant</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          blanditiis hic veritatis itaque labore deserunt, doloremque aut
          consequatur quidem optio.
        </p>
        <Link to='/searchitems'>
          <button style={{cursor:"pointer"}}>View Menu</button>
        </Link>
      </div>
      <img src={section1image} />
    </div>
  );
};

export default Section1;
