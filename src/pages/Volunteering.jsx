import React from "react";
import { campaigns } from "../mockData/campaigns";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Volunteering() {
  return (
    <div>
      <Header />
      <h1>Volunteering Campaigns</h1>
      {campaigns.map(c => (
        <Card key={c.id} title={c.title} content={`Location: ${c.location}, Date: ${c.date}`}>
          <Link to={`/campaign/${c.id}`}>View Details</Link>
        </Card>
      ))}
      <Footer />
    </div>
  );
}
