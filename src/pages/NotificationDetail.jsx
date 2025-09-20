import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotificationDetail() {
  return (
    <div>
      <Header />
      <h1>Notification Detail</h1>
      <p>This is a mock detail of the notification content.</p>

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/notifications" style={{ textDecoration: "none" }}>
          <Button text="Back to Notifications" />
        </Link>
      </div>
    </div>
  );
}
