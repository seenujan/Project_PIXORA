import React from "react";
import { campaigns } from "../mockData/campaigns";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Volunteering() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Volunteering Campaigns</h1>

      {campaigns.map((c) => (
        <div
          key={c.id}
          style={{
            background: "rgba(255, 255, 255, 0.08)", // glassy effect
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#67eee0ff", marginBottom: "10px" }}>
            {c.title}
          </h3>
          <p style={{ fontSize: "14px", color: "#9cff00", marginBottom: "15px" }}>
            Location: {c.location} | Date: {c.date}
          </p>

          {/* View Details Button */}
          <div style={{ textAlign: "center" }}>
            <Link to={`/campaign/${c.id}`} style={{ textDecoration: "none" }}>
              <Button text="View Details" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
