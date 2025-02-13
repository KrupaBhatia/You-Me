import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css"; // External CSS file for styling

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="logo"
      >
        Valentine's Day Special
      </motion.h1>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="menus">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/plan" activeClassName="active">Plan A Day</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          {/* <li><NavLink to="/love-notes" activeClassName="active">Love Notes</NavLink></li> */}
          <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
          <li><NavLink to="/music" activeClassName="active">Music</NavLink></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </header>
  );
};

export default Header;
