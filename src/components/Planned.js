import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Planned = () => {
  const [savedPlan, setSavedPlan] = useState([]);
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedPlan = JSON.parse(localStorage.getItem("selectedActivities")) || [];
    setSavedPlan(storedPlan);
  }, []);

  const changePlan = () => {
    localStorage.removeItem("selectedActivities");
    setSavedPlan([]);
    setResponse("Thik hai kar lo Changes ❤️");
    setTimeout(() => {
      navigate("/plan");
    }, 3000);

  };


  return (
    <div style={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.heading}
      >
        💖 Your Valentine's Plan 💖
      </motion.h1>

      {savedPlan.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={styles.planContainer}
        >
          {savedPlan.map((activity, index) => (
            <motion.div
              key={index}
              style={styles.activityItem}
              whileHover={{ scale: 1.05 }}
            >
              {activity}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.noPlanText}
        >
          No plan saved yet! Go back and create one! 💌
        </motion.p>
      )}

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={changePlan}className="save-button">
            Want some Changes? 🥴
          </motion.button>

          <div> 
          {response && <p className="response">{response}</p>}
          </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    textShadow: "2px 2px 10px rgba(255, 0, 150, 0.5)",
  },
  planContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  activityItem: {
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#ff6f91",
    color: "white",
    fontSize: "1.2rem",
    minWidth: "120px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  },
  noPlanText: {
    fontSize: "1.2rem",
    opacity: 0.8,
  },
};

export default Planned;
