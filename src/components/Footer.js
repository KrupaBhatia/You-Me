import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2025 Valentine's Day Special. All rights reserved.</p>
      <div>
        <a href="https://facebook.com">Facebook</a> | 
        <a href="https://instagram.com"> Instagram</a>
      </div>
    </footer>
  );
};

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#ff6f61",
  color: "white",
};

export default Footer;
