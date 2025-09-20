import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CampaignConfirm() {
  return (
    <div>
      <Header />
      <h1>Registration Confirmed!</h1>
      <p>You are successfully registered for the volunteering campaign.</p>
      <Link to="/volunteering">Back to Campaigns</Link>
      <Footer />
    </div>
  );
}
