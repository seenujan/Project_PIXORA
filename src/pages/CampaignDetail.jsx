import React from "react";
import { useParams, Link } from "react-router-dom";
import { campaigns } from "../mockData/campaigns";
import Header from "../components/Header";
import Button from "../components/Button";

export default function CampaignDetail() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id == id);

  if (!campaign) {
    return (
      <div style={{ padding: "20px" }}>
        <Header />
        <p>Campaign not found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Header outside the card */}
      <Header />

      {/* Glassy card container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)", // glassy effect
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
        <h1 style={{ fontSize: "24px", color: "#67eee0ff", marginBottom: "15px" }}>
          {campaign.title}
        </h1>

        <p style={{ fontSize: "16px", color: "#9cff00", marginBottom: "10px" }}>
          Location: {campaign.location}
        </p>
        <p style={{ fontSize: "16px", color: "#9cff00", marginBottom: "20px" }}>
          Date: {campaign.date}
        </p>

        {/* Register Button */}
        <div style={{ marginBottom: "15px" }}>
          <Link to="/campaign-confirm" style={{ textDecoration: "none" }}>
            <Button text="Register"/>
          </Link>
        </div>

        {/* Back to Volunteering Button */}
        <div>
          <Link to="/volunteering" style={{ textDecoration: "none" }}>
            <Button text="Back to Volunteering" />
          </Link>
        </div>
      </div>
    </div>
  );
}
