import React from "react";
import { useParams, Link } from "react-router-dom";
import { missions } from "../mockData/missions";
import Header from "../components/Header";
import Button from "../components/Button";

export default function MissionDetail() {
  const { id } = useParams();
  const mission = missions.find((m) => m.id == id);

  if (!mission) {
    return (
      <div style={{ padding: "20px" }}>
        <Header />
        <p>Mission not found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",  // glassy effect
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "30px", color: "#ffffffff", marginBottom: "15px" }}>
          {mission.title}
        </h1>
        <p style={{ fontSize: "20px", color: "#9fffeaff", marginBottom: "15px" }}>
          {mission.description}
        </p>
        <p style={{ fontSize: "16px", color: "white", marginBottom: "20px" }}>
          Points: {mission.points}
        </p>

        {/* Mark Complete Button */}
        <div style={{ marginBottom: "20px" }}>
          <Button
            text="Mark Complete"
            onClick={() => alert("Mission Completed!")}
          />
        </div>

        {/* Back to Home Button */}
        <Link to="/missions" style={{ textDecoration: "none" }}>
          <Button text="Back Missions" />
        </Link>
      </div>
    </div>
  );
}
