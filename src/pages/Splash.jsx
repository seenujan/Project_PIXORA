import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


export default function Splash() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Header />
      
      <h1>Welcome to OceanEcho</h1>
      <p>Explore, learn, and take action to protect our oceans.</p>
      
      {/* Additional info about the app */}
      <div style={{ margin: "30px 0", fontSize: "16px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
        <p><strong>OceanEcho</strong> is a mobile-first platform designed to educate, engage, and empower users to protect our oceans.</p>
        <ul style={{ textAlign: "left", listStyleType: "disc", marginLeft: "20px" }}>
          <li>Learn about ocean pollution and marine life</li>
          <li>Participate in missions and volunteering campaigns</li>
          <li>Track your personal impact and achievements</li>
          <li>Interact with a virtual ocean ecosystem</li>
        </ul>
      </div>

      {/* Login / Sign Up Buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <Link to="/login" style={buttonStyle}>Login</Link>
        <Link to="/signup" style={buttonStyle}>Sign Up</Link>
      </div>

    
    </div>
  );
}

// Button style
const buttonStyle = {
  display: "inline-block",
  padding: "10px 25px",
  background: "#0288d1",
  color: "white",
  borderRadius: 5,
  textDecoration: "none",
  fontWeight: "500",
  transition: "background 0.3s",
  minWidth: "100px",
  textAlign: "center"
};
