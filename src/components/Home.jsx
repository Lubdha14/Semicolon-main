
// // Import necessary dependencies
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
// // import "Home.css"
// // import heroImg from "../../assests/images/hero-img1.png";

// // Define the Home component
// function Home() {
//   return (
//     <div>
//       <Navbar/>
    
//       {/* Content of the Home component */}
//       {/* <div> */}
//         {/* Add content specific to the Home component */}
//         {/* <h1>Welcome to our website!</h1>
//         <p>This is the home page content.</p>
//       </div> */}

//       <h1 style={{ color: 'black' ,textAlign:"center"}}> Welcome to our Website</h1>  
//       <h3 style={{ color: 'black' ,textAlign:"center"}} ><u> "Education is the most powerful weapon which you can use to change the world."</u></h3>

//       <div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Secondary card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div class="card text-bg-success mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Success card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div class="card text-bg-danger mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Danger card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>
// <div class="card text-bg-warning mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Warning card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>

//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbu4Ft-bGQMcuIYUCDFdDjJaqPJJDN7djmQ&usqp=CAU" style={{paddingLeft:'580px'}} />    <p style={{ color: 'black' ,textAlign:'center',paddingLeft:"20px",paddingRight:"20px"}}>In rural areas, access to quality education can be limited due to various factors such as geographical remoteness, lack of infrastructure, and scarcity of trained teachers. However, e-learning offers a promising solution to bridge this gap and enhance educational opportunities for students in these underserved communities.

// E-learning, or electronic learning, utilizes digital technologies to deliver educational content and facilitate learning remotely. In the context of rural areas, e-learning can overcome geographical barriers by providing access to educational resources via the internet, even in areas where traditional schools may be scarce or inaccessible.

// One of the key advantages of e-learning in rural areas is its flexibility and scalability. With e-learning platforms, students can access educational materials at their own pace and convenience, allowing for personalized learning experiences tailored to individual needs and learning styles. Additionally, e-learning can reach a large number of students simultaneously, making it a cost-effective solution for serving dispersed populations in rural areas.

// Moreover, e-learning platforms can offer a diverse range of educational content, including interactive lessons, multimedia resources, and online assessments, catering to the diverse learning needs of rural students. This can help supplement traditional classroom instruction and provide opportunities for self-directed learning and skill development.

// However, challenges such as limited internet connectivity, lack of access to digital devices, and low digital literacy levels among students and teachers can hinder the effective implementation of e-learning in rural areas. Addressing these challenges requires concerted efforts from government agencies, non-profit organizations, and private sector stakeholders to invest in infrastructure development, provide training and support for educators and students, and promote digital inclusion initiatives.</p>
//           {/* <Col lg="6" md="6">
//             <img src={heroImg} alt="" className="w-100 hero__img" />
//           </Col> */}
//        <Footer/>
//     </div>
   
//   );
// }

// // Export the Home component
// export default Home;
import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{ backgroundcolor: 'purple', textAlign: "center" }} >
      <Navbar/>
    <br></br>
      <h1 style={{ color: 'black', textAlign: "center" }}> Welcome to our Website</h1>  <br></br>
      <h3 style={{ color: 'black', textAlign: "center",marginBottom:"100px" }}><u> "Education is the most powerful weapon which you can use to change the world."</u></h3>

      <div className="d-flex justify-content-around">
      <div className="card text-bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Mission</div>
        <div className="card-body">
          
          <p className="card-text" style={{color:"white"}}>The mission of the e-learning platform is its fundamental purpose or reason for existence. It should encapsulate what the platform aims to achieve for its users and stakeholders.</p>
        </div>
      </div>
      <div className="card text-bg-success mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Vision</div>
        <div className="card-body">
          
          <p className="card-text" style={{color:"white"}}>The vision of the e-learning platform describes its long-term aspirations and the desired future state it seeks to create.</p>
        </div>
      </div>
      <div className="card text-bg-danger mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Aim</div>
        <div className="card-body">
         
          <p className="card-text" style={{color:"white"}}>The aim of the e-learning platform specifies the overarching goal or objective towards which the platform's efforts are directed.</p>
        </div>
      </div>
      <div className="card text-bg-warning mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Motivation</div>
        <div className="card-body">
        
          <p className="card-text" style={{color:"white"}}>Motivation is the driving force that energizes, directs, and sustains behavior toward achieving a goal or fulfilling a need.</p>
        </div>
      </div>
    </div>

      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbu4Ft-bGQMcuIYUCDFdDjJaqPJJDN7djmQ&usqp=CAU" style={{ paddingLeft: '580px' }} />     */}
      <p style={{ color: 'black', textAlign: 'center', paddingLeft: "20px", paddingRight: "20px",marginTop:"100px" }}>
        In rural areas, access to quality education can be limited due to various factors such as geographical remoteness, lack of infrastructure, and scarcity of trained teachers. However, e-learning offers a promising solution to bridge this gap and enhance educational opportunities for students in these underserved communities.

        E-learning, or electronic learning, utilizes digital technologies to deliver educational content and facilitate learning remotely. In the context of rural areas, e-learning can overcome geographical barriers by providing access to educational resources via the internet, even in areas where traditional schools may be scarce or inaccessible.

        One of the key advantages of e-learning in rural areas is its flexibility and scalability. With e-learning platforms, students can access educational materials at their own pace and convenience, allowing for personalized learning experiences tailored to individual needs and learning styles. Additionally, e-learning can reach a large number of students simultaneously, making it a cost-effective solution for serving dispersed populations in rural areas.

       </p>
      <Footer/>
    </div>
  );
}

export default Home;
