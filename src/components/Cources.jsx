import React from 'react'
import Video from './Class1.mp4';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
function Cources() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Navbar/>
      <h1 style={{ fontWeight: "bold" }}>Class 1</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Video</h2>
        <video width="560" height="315" controls>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h2>First Standard Syllabus</h2>
        <p style={{font:"bold",textAlign:"center"}}>
          In 1st standard, children typically begin to build foundational skills
          across various domains, including academic, social, emotional, and
          physical development.
        </p>
        {/* Add more content here */}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h2>Downloadable Books</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <a href="./mathew.pdf" download>
              <b style={{color:"black"}}>Math</b>
            </a>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <a href="./Science.pdf" download>
              <b style={{color:"black"}}>Science</b>
            </a>
          </li>
          {/* Add more downloadable books with their links */}
        </ul>
      </div>
      <div>
        <h2>Language Arts</h2>
        <p style={{font:"bold",textAlign:"center"}}>
          Recognizing and understanding the alphabet (both uppercase and
          lowercase letters). Basic phonics knowledge, including letter sounds
          and simple word decoding.
        </p>
        <div>
          <button
            style={{
              borderRadius: "20px",
              backgroundColor: "yellow",
              color: "white",
              padding: "10px 20px",
              margin: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Mathematics
          </button>
          <Link to="/quiz">
            <button
              style={{
                borderRadius: "20px",
                backgroundColor: "yellow",
                color: "white",
                padding: "10px 20px",
                margin: "5px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Science
            </button>
          </Link>
          {/* Add more subject buttons */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default Cources