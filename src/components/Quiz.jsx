import React, { useState, useRef, useEffect } from 'react';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [roughWork, setRoughWork] = useState('');
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPos, setPrevPos] = useState({ offsetX: 0, offsetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 2;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setPrevPos({ offsetX, offsetY });
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const { offsetX: x, offsetY: y } = prevPos;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(offsetX, offsetY);
    context.stroke();

    setPrevPos({ offsetX, offsetY });
  };

  const endDrawing = () => {
    setIsDrawing(false);
  };

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz finished
      setShowScore(true);
    }
  };

  const handleRoughWorkChange = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    setRoughWork(dataURL);
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const [questions] = useState([
    {
      question: 'What is 10 + 2?',
      options: ['3', '12', '5', '6'],
      answer: '12',
    },
    {
      question: 'What is 5 * 5?',
      options: ['20', '25', '30', '35'],
      answer: '25',
    },
    {
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      answer: '12',
    },
    {
      question: 'What is the value of π (pi) to two decimal places?',
      options: ['3.14', '3.15', '3.16', '3.17'],
      answer: '3.14',
    },
    {
      question: 'What is the area of a circle with radius 5 units?',
      options: ['20π', '25π', '30π', '35π'],
      answer: '25π',
    },
    {
      question: 'What is the largest prime number less than 100?',
      options: ['97', '98', '99', '100'],
      answer: '97',
    },
    {
      question: 'What is the value of 2^10 (2 to the power of 10)?',
      options: ['1024', '2048', '4096', '8192'],
      answer: '1024',
    },
    {
      question: 'Solve the following equation for x: 3x + 7 = 19',
      options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'],
      answer: 'x = 4',
    },
    {
      question: 'What is the sum of the first 10 terms of the arithmetic sequence: 2, 5, 8, 11, ...?',
      options: ['220', '225', '230', '235'],
      answer: '230',
    },
    {
      question: 'A cylindrical tank has a radius of 6 meters and a height of 10 meters. What is the volume of the tank?',
      options: ['180π m³', '200π m³', '220π m³', '240π m³'],
      answer: '360π m³',
    },
  ]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Maths Quiz</h1>
      {showScore ? (
        <div>
          <h2>Quiz Finished!</h2>
          <h2>Your score is {score}/{questions.length}</h2>
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>{questions[currentQuestion].question}</h2>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  cursor: 'pointer',
                  marginTop: '10px',
                  padding: '10px',
                  backgroundColor: '#f4f4f4',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = 'yellow'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f4f4f4'}
              >
                {option}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '20px' }}>
            <h3>Rough Work</h3>
            <canvas
              ref={canvasRef}
              width={800}
              height={200}
              style={{
                border: '9px solid #ccc',
                borderRadius: '5px',
                cursor: 'crosshair',
              }}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseOut={endDrawing}
            />
            <button onClick={clearBoard} style={{ marginTop: '20px' }}>
              Clear Board
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
