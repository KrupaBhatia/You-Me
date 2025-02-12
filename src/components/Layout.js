import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"; // Import the global styles

const Layout = () => {
  return (
    <div className="layout-container">

      <video autoPlay loop muted className="background-video">
        <source src="./background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;
