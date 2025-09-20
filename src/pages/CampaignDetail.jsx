import React from "react";
import { useParams, Link } from "react-router-dom";
import { campaigns } from "../mockData/campaigns";
import Header from "../components/Header";
import Button from "../components/Button";

export default function CampaignDetail() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id == id);

  return (
    <div>
      <Header />
      <h1>{campaign.title}</h1>
      <p>Location: {campaign.location}</p>
      <p>Date: {campaign.date}</p>

      <div style={{ marginTop: "15px" }}>
        <Button
          text="Register"
          onClick={() => alert("Registered for campaign (mock)!")}
        />
      </div>

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "15px" }}>
        <Link to="/volunteering" style={{ textDecoration: "none" }}>
          <Button text="Back to Volunteering" />
        </Link>
      </div>
    </div>
  );
}
