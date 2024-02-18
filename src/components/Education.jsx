import React, { useState } from "react";

const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];

const Chatbot = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade 1");

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value);
  };

  return (
    <div>
      <div>
        <select value={selectedGrade} onChange={handleGradeChange}>
          {grades.map((grade, index) => (
            <option key={index} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>ABC Video</h2>
        <video controls>
          <source src="abc_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h2>Short Assignment</h2>
        <p>Write down the first four letters of the alphabet (ABCD) three times.</p>
      </div>
    </div>
  );
};

export default Chatbot;
