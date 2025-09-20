import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Profile() {
  return (
    <div>
      <Header />
      <h1>My Profile</h1>
      <p>Name: Jane Doe (mock)</p>
      <p>Email: jane@example.com</p>

      {/* Set Goals link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/goal-setting" style={{ textDecoration: "none" }}>
          <Button text="Set Goals" />
        </Link>
      </div>

      {/* Back to Home link changed to Button */}
      <div style={{ marginTop: "10px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
