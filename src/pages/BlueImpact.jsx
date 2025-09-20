import React from "react";
import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function BlueImpact() {
  return (
    <div>
      <Header />
      <h1>My Blue Impact</h1>
      <p>Total Points: 150 (mock)</p>
      <ProgressBar percent={75} />
      <p>Virtual Ocean Health</p>

      {/* Buttons instead of plain links */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/impact-timeline" style={{ textDecoration: "none" }}>
          <Button text="View Timeline" />
        </Link>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Link to="/achievements" style={{ textDecoration: "none" }}>
          <Button text="View Achievements" />
        </Link>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
