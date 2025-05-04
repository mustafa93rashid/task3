import React, { useState, useEffect } from "react";
import "./NavBar2.css";
import { NavData } from "../../Data/NavData";
import { NavLink } from "react-router";

// NavBar2 Component: Main navigation bar with scroll detection and mobile menu support
const NavBar2 = () => {
  // State to track the currently active navigation link
  const [activeLink, setActiveLink] = useState(
    localStorage.getItem("activeLink") || "Home"
  );

  // State to track whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // State to track whether the user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Update localStorage whenever the active link changes
  useEffect(() => {
    localStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  // Handle scroll event to update navbar style based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navbar container with dynamic class based on scroll state
    <nav className={`px-50 MR-navContainer ${isScrolled ? "scrolled" : ""}`}>
      <div className="MR-nav">
        {/* Logo on the left side */}
        <img src="/task3/images/Navbar/Logo.svg" className="MR-navLogo" alt="logo" />

        {/* Navigation links */}
        <ul className={`MR-navList ${menuOpen ? "open" : ""}`}>
          {NavData.map((item, index) => (
            <li
              key={index}
              className={`fs-20 ${
                item.name === activeLink ? "Mr-active" : ""
              } ${item.name === "Contact" ? "Mr-contact" : ""}`}
              onClick={() => {
                setActiveLink(item.name);
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top

              }}
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        
        <img
          src={menuOpen ? "/task3/images/Navbar/close.svg" : "/task3/images/Navbar/Vector (Stroke).svg"}
          className={`Mr-toggleButton ${menuOpen ? "rotate" : ""}`}
          alt="menu toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
    </nav>
  );
};

export default NavBar2;
