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
    <div>
      <Header />
      <h1>Impact Timeline</h1>
      <ul>
        {mockTimeline.map((item, idx) => (
          <li key={idx}>{item}</li>
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
