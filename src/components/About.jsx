import React from 'react'

function About() {
  return (
    <div className="about-container">
      <h1>ABOUT US</h1>
      <p>
        Our eLearning platform offers a diverse range of courses catering to
        various interests and skill levels. With interactive lessons, quizzes,
        and multimedia resources, we ensure an engaging learning experience.
        Expert instructors guide students through comprehensive curriculum
        designed to foster knowledge and mastery. From academic subjects to
        professional development, our platform empowers learners to achieve
        their educational goals. Join us today and embark on a journey of
        lifelong learning and growth.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to bridge the digital divide by making our eLearning
        platform accessible to all rural areas. Through innovative technology
        and community partnerships, we aim to empower learners in remote regions
        with quality education opportunities.
      </p>

      <h3>Meet Our Team</h3>
      <div className="team-members">
        {/* Team member 1 */}
        <div className="team-member">
          {/* <img src="/images/team_member1.jpeg" alt="Rajeshree" /> */}
          <h4>Rajshri</h4>
          <p>Speech Therapist</p>
          <p>
            Rajeshree is a dedicated speech therapist with over 10 years of
            experience. She specializes in helping individuals of all ages
            overcome speech challenges and improve communication skills.
          </p>
          <p>Contact: rajeshree@example.com Phone:09096769868</p>
        </div>

        {/* Team member 2 */}
        <div className="team-member">
          {/* <img src="/images/team_member2.jpeg" alt="Joe" /> */}
          <h4>Joe</h4>
          <p>Speech Language Pathologist</p>
          <p>
            Joe is a skilled speech language pathologist who is passionate about
            assisting children and adults in achieving their full potential in
            communication.
          </p>
          <p>Contact: joe.smith@example.com Phone: 09096769868</p>
        </div>
      </div>

      
    </div>
  );
}

export default About

const styles = `
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
  border-bottom: 2px solid #3498db;
  padding-bottom: 5px;
}

h3 {
  color: #3498db;
}

p {
  line-height: 1.6;
  color: #555;
  text-align: justify;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
}

a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #1281ca;
}

.team-members {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.team-member {
  text-align: center;
  width: 30%;
  margin: 10px;
}

.team-member img {
  max-width: 100%;
  border-radius: 50%;
  height: 200px;
}

.services-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.services-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 50%; /* Two items per row, adjust as needed */
}

.services-list img {
  width: 80px;
  height: 60px;
  margin-right: 10px;
}
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);