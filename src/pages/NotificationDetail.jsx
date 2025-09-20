import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function NotificationDetail() {
  return (
    <div>
      <Header />
      <h1>Notification Detail</h1>
      <p>This is a mock detail of the notification content.</p>
      <Link to="/notifications">Back to Notifications</Link>
      
    </div>
  );
}
