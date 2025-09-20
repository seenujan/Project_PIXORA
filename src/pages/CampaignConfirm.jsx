import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function CampaignConfirm() {
  return (
    <div>
      <Header />
      <h1>Registration Confirmed!</h1>
      <p>You are successfully registered for the volunteering campaign.</p>

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/volunteering" style={{ textDecoration: "none" }}>
          <Button text="Back to Campaigns" />
        </Link>
      </div>
    </div>
  );
}
