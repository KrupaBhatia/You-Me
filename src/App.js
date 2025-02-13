import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import Layout
import ForeverValentine from "./components/home";
import Plan from "./components/Plan";
import Planned from "./components/Planned";
import Header from "./components/Header";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Music from "./components/Music";

const App = () => {
  return (
    <Router>
       <Header /> 
      <Routes>
     
        <Route path="/" element={<Layout />}>
          <Route index element={<ForeverValentine />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/planned" element={<Planned />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/music" element={<Music />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
