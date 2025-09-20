import React from "react";
import { missions } from "../mockData/missions";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Missions() {
  return (
    <div>
      <Header />
      <h1>Missions</h1>
      {missions.map((m) => (
        <div key={m.id}>
          <h3>{m.title}</h3>
          <p>{m.description}</p>

          {/* Details link changed to button */}
          <div style={{ marginTop: "10px" }}>
            <Link to={`/mission/${m.id}`} style={{ textDecoration: "none" }}>
              <Button text="Details" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
