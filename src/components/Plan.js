import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import "./Plan.css"; // Import new styles

const options = [
  "Movie 🎬", "restaurant or hotel with drink 🍷", "hotel and chill 🏨", "Beach Walk 🌊",
  "Shopping 🛍️", "Gaming 🎮", "massage 💆🏻‍♂️", "temple 🛕",
  "snow world ❄️", "Theme Park 🎡"
];

// Draggable Item
const DraggableItem = ({ name, disabled }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "OPTION",
    item: { name },
    canDrag: !disabled, // Ensure only selected items are disabled
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={disabled ? null : drag} // Only attach drag ref if draggable
      style={{
        padding: "10px",
        margin: "5px",
        backgroundColor: disabled ? "#ccc" : isDragging ? "#ffb3c1" : "#ff6f91",
        color: "white",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "grab",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {name}
    </div>
  );
};

// Drop Bucket
const DropBucket = ({ selectedOptions, setSelectedOptions }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "OPTION",
    drop: (item) => {
      setSelectedOptions((prev) => {
        if (prev.length < 5 && !prev.includes(item.name)) {
          const updatedSelection = [...prev, item.name];
          localStorage.setItem("selectedActivities", JSON.stringify(updatedSelection));
          return updatedSelection;
        }
        return prev;
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className={`drop-bucket ${isOver ? "hovered" : ""}`}>
      <h3>💖 Your Valentine's Plan 💖</h3>
      {selectedOptions.length === 0 && <p>Drop your 5 favorite activities here!</p>}
      {selectedOptions.map((item, index) => (
        <div key={index} className="selected-option">{item}</div>
      ))}
    </div>
  );
};

const Plan = () => {
  const [selectedOptions, setSelectedOptions] = useState(() => {
    return JSON.parse(localStorage.getItem("selectedActivities")) || [];
  });
  const [response, setResponse] = useState("");
  const navigate = useNavigate();


  const resetSelections = () => {
    setSelectedOptions([]);
    localStorage.removeItem("selectedActivities");
  };

  const savePlan = () => { 
  setResponse("So Finally u did it!!!  ❤️");
    setTimeout(() => {
      navigate("/planned");
    }, 3000);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="plan-container">
        <h1>Thank You for Being My Valentine! ❤️</h1>
        <p>Choose up to 5 romantic activities for our special day! Drag and drop them into the bucket below.</p>

        <div className="drag-drop-container">
          {/* Available Options */}
          <div className="options-container">
            <h3>🎀 Select Activities 🎀</h3>
            {options.map((item, index) => (
              <DraggableItem key={index} name={item} disabled={selectedOptions.includes(item)} />
            ))}
          </div>

          {/* Drop Bucket */}
          <DropBucket selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
        </div>

        {/* Buttons */}
        <div className="buttons-container">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={resetSelections} className="reset-button">
            Reset Selections ❌
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={savePlan}className="save-button">
            Save Plan 💾
          </motion.button>
          <div> 
          {response && <p className="response">{response}</p>}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Plan;
