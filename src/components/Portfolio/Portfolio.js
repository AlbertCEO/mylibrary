import React  from "react";
import "./Portfolio.css";
import Navbar from "../Mainpage/Navbar/Navbar";
import Footer from "../Mainpage/Footer/Footer";
function Portfolio(props){
    return(
        <div>
          <Navbar/>
        <nav className="nav-place">
            <ul>
                <li>Romance</li>
                <li>Thriller</li>
                <li>Horror</li>
                <li>Fantasy</li>
                <li>Adventure</li>
                <li>Country</li>
                <li>Crime</li>
                <li>Science</li>
              
              
                <input
             className="place-input"
              type="text"
              placeholder={"Location"}
              />
             
            </ul>
            
        </nav>
        <Footer />
        </div>
    )
}

export default Portfolio;