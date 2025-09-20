import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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
        {mockNotifications.map((n, idx) => <li key={idx}><Link to="/notification-detail">{n}</Link></li>)}
      </ul>
      <Link to="/home">Back to Home</Link>
      
    </div>
  );
}
