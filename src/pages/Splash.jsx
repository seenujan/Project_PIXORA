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
          Welcome to OceanEcho 🌟
        </h1>

        <p style={{ fontSize: "16px", color: "white", marginBottom: "25px" }}>
          Explore, learn, and take action to protect our oceans 🐠🐋.
        </p>

        {/* App Features (Centered) */}
        <div style={{ fontSize: "16px", marginBottom: "25px", lineHeight: "2" }}>
          <p>📝 Learn about ocean pollution and marine life</p>
          <p>🏖️ Participate in missions and volunteering campaigns</p>
          <p>📊 Track your personal impact and achievements</p>
          <p>🐢 Interact with a virtual ocean ecosystem</p>
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
