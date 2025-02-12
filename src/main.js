import React, { useState, useRef } from "react";

const Main = () => {
  const [playCount, setPlayCount] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  

  const handleVideoEnd = () => {
    console.log("Video ended!");
    setPlayCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("Play count:", newCount);
      if (newCount === 1) {
        setShowQuestion(true);
        console.log("Question is now visible.");
      }
      return newCount;
    });
  };

  return (
    <div>
      {!showQuestion ? (
        <video
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1>Will you be my Valentine?</h1>
          <button
            onClick={() => alert("Yay! You said yes!")}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => alert("Oh no! Maybe next time.")}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "gray",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
