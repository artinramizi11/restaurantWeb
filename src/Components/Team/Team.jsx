import React from "react";
import Gallery from "../Gallery";
import chef1 from "../../assets/images/chef1.png";
import chef2 from "../../assets/images/chef2.png";
import chef3 from "../../assets/images/chef3.png";
import chef4 from "../../assets/images/chef4.png";
import Reservation from "../Reservation/Reservation";
import ReservationForm from "../Reservation/ReservationForm";

const Team = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            borderTop: "1px solid orange",
            borderBottom: "1px solid orange",
          }}
        >
          TEAM
        </p>
        <h1>Meet Our Proffesionals Chefs</h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: "orange" }}>
            <img src={chef1} />
          </div>
          <p>Avroko</p>
          <p>Master Chef</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: "orange" }}>
            <img src={chef2} />
          </div>
          <p>Evan Mattew</p>
          <p>Master Chef</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: "orange" }}>
            <img src={chef3} />
          </div>
          <p>Diane Clarkson</p>
          <p>Master Chef</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ backgroundColor: "orange" }}>
            <img src={chef4} />
          </div>
          <p>Dan Rafalin</p>
          <p>Assistant Chef</p>
        </div>
      </div>

      <Gallery />
      <ReservationForm />
    </>
  );
};

export default Team;
