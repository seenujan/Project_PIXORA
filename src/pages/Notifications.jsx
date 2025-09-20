import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Notifications() {
  const mockNotifications = [
    "New quiz available: Ocean Pollution Quiz",
    "Beach Cleanup campaign starts tomorrow",
    "You earned 50 points from Beach Cleanup"
  ];

  return (
    <div>
      <Header />
      <h1>Notifications</h1>
      <ul>
        {mockNotifications.map((n, idx) => (
          <li key={idx}>
            {/* Link changed to Button */}
            <Link to="/notification-detail" style={{ textDecoration: "none" }}>
              <Button text={n} />
            </Link>
          </li>
        ))}
      </ul>

      {/* Back to Home changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}

