import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // menu closed initially

  const toggleMenu = () => setMenuOpen(prev => !prev); // toggle state

  return (
    <header style={{
      padding: "10px 20px",
      background: "#0288d1",
      color: "white",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <h1 style={{ fontSize: "24px" }}>OceanEcho</h1>

      {/* Hamburger Icon */}
      <div 
        onClick={toggleMenu} 
        style={{ cursor: "pointer", fontSize: "24px" }}
      >
        &#9776;
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div style={{
          position: "absolute",
          top: "60px",
          right: "20px",
          background: "#1da0e7ff",
          borderRadius: "5px",
          padding: "10px",
          width: "180px",
          zIndex: 1000,
        }}>
          {menuLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              style={menuItemStyle} 
              onClick={() => setMenuOpen(false)} // close menu when clicked
              onMouseEnter={e => e.target.style.background = "#026aa7"} 
              onMouseLeave={e => e.target.style.background = "transparent"} 
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

// Menu items
const menuLinks = [
  { name: "Home", path: "/home" },
  { name: "Awareness", path: "/awareness" },
  { name: "Missions", path: "/missions" },
  { name: "Volunteering", path: "/volunteering" },
  { name: "My Impact", path: "/blueimpact" },
  { name: "Notifications", path: "/notifications" },
  { name: "Profile", path: "/profile" },
];

// Menu item style
const menuItemStyle = {
  display: "block",
  padding: "8px 10px",
  color: "white",
  textDecoration: "none",
  borderRadius: "3px",
  transition: "background 0.2s ease"
};
