import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Achievements() {
  const mockAchievements = [
    { title: "Coral Protector Badge", points: 50, icon: "🪸" },
    { title: "Turtle Saver Badge", points: 40, icon: "🐢" },
    { title: "Ocean Quiz Master", points: 60, icon: "📝" },
  ];

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
        <h1 style={{ fontSize: "24px", color: "#67eee0ff", marginBottom: "20px" }}>
          My Achievements
        </h1>

        <p style={{ fontSize: "16px", color: "#9cff00", marginBottom: "20px" }}>
          Total Achievements: {mockAchievements.length}
        </p>

        <ul style={{ listStyle: "none", padding: 0, marginBottom: "25px" }}>
          {mockAchievements.map((a, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: "15px",
                fontSize: "16px",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(255,255,255,0.05)",
                padding: "10px 15px",
                borderRadius: "10px"
              }}
            >
              <span>{a.icon} {a.title}</span>
              <span style={{ color: "#9cff00", fontWeight: "bold" }}>{a.points} pts</span>
            </li>
          ))}
        </ul>

        <p style={{ color: "white", marginBottom: "20px" }}>
          Keep going! You're only 50 points away from the next badge! 🌊
        </p>

        {/* Back Button */}
        <div>
          <Link to="/blueimpact" style={{ textDecoration: "none" }}>
            <Button text="Back to My Blue Impact" />
          </Link>
        </div>
      </div>
    </div>
  );
}
