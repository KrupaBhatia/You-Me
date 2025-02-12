import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForeverValentine.css"; // Import CSS file

const ForeverValentine = () => {
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleYes = () => {
    setResponse("Yay! You made my day! ❤️");
    setTimeout(() => {
      navigate("/plan");
    }, 3000);
  };

  const handleNo = () => {
    setResponse("You can't say no to me! 💔");
  };

  return (
    <div className="valentine-container">
      {/* Overlay Content */}
      <div className="overlay">
        <h1 className="valentine-text">Will You Be My Forever Valentine? 💖</h1>
        <div className="buttons">
          <button onClick={handleYes} className="yes-button">Make Plan! 💘</button>
          <button onClick={handleNo} className="no-button">No 💔</button>
        </div>
        {response && <p className="response">{response}</p>}
      </div>
    </div>
  );
};

export default ForeverValentine;
