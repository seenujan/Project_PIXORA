import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function ImpactTimeline() {
  const mockTimeline = [
    "Completed Beach Cleanup - 50 points",
    "Finished Ocean Pollution Quiz - 30 points",
    "Registered for Coral Planting Campaign - 20 points",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Glassy card container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)", // glassy effect
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          margin: "20px auto"
        }}
      >
        <h1 style={{ fontSize: "24px", color: "#67eee0ff", marginBottom: "20px" }}>
          Impact Timeline
        </h1>

        <ul style={{ textAlign: "left", paddingLeft: "20px", color: "white", marginBottom: "25px" }}>
          {mockTimeline.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px" }}>{item}</li>
          ))}
        </ul>

        {/* Back Button */}
        <div style={{ textAlign: "center" }}>
          <Link to="/blueimpact" style={{ textDecoration: "none" }}>
            <Button text="Back to My Blue Impact" />
          </Link>
        </div>
      </div>
    </div>
  );
}
