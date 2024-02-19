import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";





const Navbar = () => {
  return (
    <>
      
      <nav>
        <div className="left_nav">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="logo"
          />
          <h2 style={{color:"white"}}>RuralEdge Academy</h2>
          <div className="right_nav">
            
            {/* <h1 className="clinic_name">Rajshri Clinic</h1> */}
          </div>
        </div>
      </nav>
      <div className="bottom_nav">
        <ul>
        {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Library">Library</Link>
          </li>
          
          <li>
            <Link to="/Events">Events</Link>
          </li>
          <li>
            <Link to="/Quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/Cources">Courses</Link>
          </li>
          <li>
            <Link to="/Curricular">Curricular</Link>
          </li>
          <li>
            <Link to="/Abled">Specially Abled</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;