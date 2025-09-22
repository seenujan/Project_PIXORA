import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <header style={{
        padding: "10px 20px",
        background: "#0288d1",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative"
      }}>
        <h1 style={{ fontSize: "30px", color: "white", margin: 0 }}>OceanEcho</h1>

        {/* Hamburger Icon */}
        <div onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "24px" }}>
          &#9776;
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 999
          }}
          onClick={() => setMenuOpen(false)} // close when clicking outside menu
        >
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "20px",
              background: "#1da0e7ff",
              borderRadius: "20px",
              padding: "10px",
              width: "180px",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
            onClick={e => e.stopPropagation()} // prevent closing when clicking inside menu
          >
            {menuLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                style={menuItemStyle}
                onClick={() => setMenuOpen(false)} // close after selecting link
                onMouseEnter={e => e.target.style.background = "#026aa7"}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
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
  transition: "background 0.2s ease",
  marginBottom: "5px"
  
};
