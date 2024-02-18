import React, { useState } from "react";
import "./Chatbot.css";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isBot: true },
  ]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { text: inputText, isBot: false }]);
    setInputText("");
    // Simulate bot response (you can replace this with actual logic)
    setTimeout(() => {
      const botResponses = [
        "E-learning refers to learning conducted via electronic media, typically on the internet.",
        "Rural areas generally have lower literacy rates compared to urban areas due to factors such as limited access to education and resources.",
        "Illiteracy refers to the inability to read or write.","It is a significant issue in many parts of the world and can hinder individuals' access to education and opportunities.",
      ];
      const randomIndex = Math.floor(Math.random() * botResponses.length);
      setMessages([
        ...messages,
        { text: inputText, isBot: false }, // Add user's message
        { text: botResponses[randomIndex], isBot: true }, // Add bot's response
      ]);
    }, 500);
  };

  return (
    <div
      className="chatbot-container"
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <div
        className="chat-history"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <div style={{ textAlign: message.isBot ? "left" : "right" }}>
              <span
                style={{
                  background: message.isBot ? "#f0f0f0" : "#007bff",
                  color: message.isBot ? "#333" : "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {message.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input" style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            marginLeft: "10px",
            padding: "8px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
