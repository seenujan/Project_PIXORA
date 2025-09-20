import React from "react";
import { campaigns } from "../mockData/campaigns";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Volunteering() {
  return (
    <div>
      <Header />
      <h1>Volunteering Campaigns</h1>
      {campaigns.map((c) => (
        <Card key={c.id} title={c.title} content={`Location: ${c.location}, Date: ${c.date}`}>
          {/* View Details link changed to Button */}
          <div style={{ marginTop: "10px" }}>
            <Link to={`/campaign/${c.id}`} style={{ textDecoration: "none" }}>
              <Button text="View Details" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
