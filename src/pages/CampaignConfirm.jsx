import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function CampaignConfirm() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Glassy Confirmation Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "20px",
          padding: "40px 30px",
          maxWidth: "500px",
          margin: "60px auto",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)"
        }}
      >
        {/* Celebration Emoji */}
        <div style={{ fontSize: "50px", marginBottom: "20px" }}>🎉</div>

        <h1 style={{ color: "#2ec4b6", fontSize: "28px", marginBottom: "15px" }}>
          Registration Confirmed!
        </h1>

        <p style={{ fontSize: "16px", color: "white", marginBottom: "30px" }}>
          You are successfully registered for the volunteering campaign. Thank you for contributing to a cleaner ocean! 🌊
        </p>

        {/* Back to Campaigns Button */}
        <div>
          <Link to="/volunteering" style={{ textDecoration: "none" }}>
            <Button text="Back to Campaigns" />
          </Link>
        </div>
      </div>
    </div>
  );
}
