import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Notifications() {
  const mockNotifications = [
    { 
      text: "New quiz available: Ocean Pollution Quiz", 
      type: "quiz", 
      time: "2h ago", 
      link: "/quiz-selection" 
    },
    { 
      text: "Beach Cleanup campaign starts tomorrow", 
      type: "campaign", 
      time: "1d ago",
      link: "/volunteering" 
    },
    { 
      text: "You earned 50 points from Beach Cleanup", 
      type: "points", 
      time: "3d ago",
      link: "/achievements" 
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Notifications</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px", margin: "0 auto" }}>
        {mockNotifications.map((n, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "15px",
              padding: "15px 20px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            }}
          >
            <p style={{ color: "white", fontSize: "20px", marginBottom: "5px" }}>
              {n.type === "quiz" && "📝"} 
              {n.type === "campaign" && "🏖️"} 
              {n.type === "points" && "💎"} 
              {n.text}
            </p>
            <p style={{ color: "#9cff00", fontSize: "16px", marginBottom: "10px" }}>
              {n.time}
            </p>
            {/* See More button */}
            <Link to={n.link} style={{ textDecoration: "none", alignSelf: "center" }}>
              <Button text="See More" />
            </Link>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div style={{ textAlign: "center", marginTop: "25px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
