import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Splash() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Header />
      <h1>Welcome to OceanEcho</h1>
      <p>Explore, learn, and take action to protect our oceans.</p>
      <img 
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
        alt="Ocean" 
        style={{ width: "80%", borderRadius: 10, margin: "20px 0" }}
      />
      <Link to="/onboarding" style={{ display: "inline-block", padding: "10px 20px", background: "#0288d1", color: "white", borderRadius: 5, textDecoration: "none" }}>
        Get Started
      </Link>
      <Footer />
    </div>
  );
}
