import React from "react";
import { missions } from "../mockData/missions";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Missions() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Missions</h1>

      {missions.map((m) => (
        <div
          key={m.id}
          style={{
            background: "rgba(255, 255, 255, 0.08)", // glassy effect
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#98f9efff", marginBottom: "10px" }}>
            {m.title}
          </h3>
          <p style={{ fontSize: "18px", color: "#8cffeaff", marginBottom: "15px" }}>
            {m.description}
          </p>

          {/* Centered Details button */}
          <div style={{ textAlign: "center" }}>
            <Link to={`/mission/${m.id}`} style={{ textDecoration: "none" }}>
              <Button text="Details" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
