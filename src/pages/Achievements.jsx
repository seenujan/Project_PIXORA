import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Achievements() {
  const mockAchievements = [
    "Coral Protector Badge",
    "Turtle Saver Badge",
    "Ocean Quiz Master",
  ];

  return (
    <div>
      <Header />
      <h1>Achievements</h1>
      <ul>
        {mockAchievements.map((a, idx) => (
          <li key={idx}>{a}</li>
        ))}
      </ul>

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/blueimpact" style={{ textDecoration: "none" }}>
          <Button text="Back to My Blue Impact" />
        </Link>
      </div>
    </div>
  );
}
