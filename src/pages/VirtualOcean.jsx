import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { species } from "../mockData/species";

export default function VirtualOcean() {
  return (
    <div>
      <Header />
      <h1>Virtual Ocean</h1>
      <p>Interact with your virtual ocean ecosystem:</p>
      <ul>
        {species.map((s) => (
          <li key={s.id}>
            {s.name} - {s.unlocked ? "Unlocked" : "Locked"}
          </li>
        ))}
      </ul>

      {/* Back to My Blue Impact link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <a href="/blueimpact" style={{ textDecoration: "none" }}>
          <Button text="Back to My Blue Impact" />
        </a>
      </div>
    </div>
  );
}
