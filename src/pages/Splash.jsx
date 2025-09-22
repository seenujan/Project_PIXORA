import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Splash() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Glassy Card Container */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
          padding: "40px 30px",
          maxWidth: "600px",
          margin: "40px auto",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
        }}
      >
        {/* Hero / Welcome Emoji */}
        <div style={{ fontSize: "50px", marginBottom: "15px" }}>🌊🐢</div>

        <h1 style={{ color: "#5feee0ff", fontSize: "30px", marginBottom: "15px" }}>
          Welcome to OceanEcho
        </h1>

        <p style={{ fontSize: "20px", color: "white", marginBottom: "25px" }}>
          <b>Explore, learn, and take action to protect our oceans 🐠🐋.</b>
        </p>

        {/* App Features (Centered) */}
        <div style={{ fontSize: "16px", color: "black", marginBottom: "25px", lineHeight: "2" }}>
          <p><b>📝 Learn about ocean pollution and marine life</b></p>
          <p><b>🏖️ Participate in missions and volunteering campaigns</b></p>
          <p><b>📊 Track your personal impact and achievements</b></p>
          <p><b>🐢 Interact with a virtual ocean ecosystem</b></p>
        </div>

        {/* Login / Sign Up Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button text="Login 🔑" />
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button text="Sign Up ✍️" />
          </Link>
        </div>
      </div>
    </div>
  );
}
