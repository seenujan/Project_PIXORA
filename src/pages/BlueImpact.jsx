import React from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function BlueImpact() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Glassy card container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
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
        <h1 style={{ fontSize: "24px", color: "#67eee0ff", marginBottom: "15px" }}>
          My Blue Impact
        </h1>

        <p style={{ fontSize: "16px", color: "#9cff00", marginBottom: "15px" }}>
          Total Points: 150 (mock)
        </p>

        <div style={{ marginBottom: "15px" }}>
          <ProgressBar percent={75} />
        </div>

        <p style={{ fontSize: "16px", color: "white", marginBottom: "25px" }}>
          Virtual Ocean Health
        </p>

        {/* Buttons */}
        <div style={{ marginBottom: "15px" }}>
          <Link to="/impact-timeline" style={{ textDecoration: "none" }}>
            <Button text="View Timeline" />
          </Link>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <Link to="/achievements" style={{ textDecoration: "none" }}>
            <Button text="View Achievements" />
          </Link>
        </div>

        <div>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
