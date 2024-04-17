import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Books from "../Books/Books";
const Home = (props) => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="home-text">
          <h2>
            Buy a <span>Book</span> and travel away from <br />
            <span>Home</span> in your <span>Imagination</span>
          </h2>
          <p>
            we provide you access to quality and affordable books
            <br /> in different libraries around the world, get a chance to turn your <br />
            imagination to reality at your comfort zone{" "}
          </p>
          <form>
            <input
              className="search"
              type="text"
              placeholder="Search for location"
            />
            <button className="search-btn">Search</button>
          </form>
        </div>
        <img src="./images/Group 4028.png" alt="" className="dock-image"/>
      </div>
      <div className="home-div">
        <img
          className="image-span-details"
          src="./images/Frame 137.png"
          alt=""
        />
      </div>
     <Books metas={props.books}/>
    </div>
    
  );
};
export default Home;