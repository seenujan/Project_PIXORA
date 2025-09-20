import React from "react";
import Header from "../components/Header";

import { species } from "../mockData/species";

export default function VirtualOcean() {
  return (
    <div>
      <Header />
      <h1>Virtual Ocean</h1>
      <p>Interact with your virtual ocean ecosystem:</p>
      <ul>
        {species.map(s => (
          <li key={s.id}>{s.name} - {s.unlocked ? "Unlocked" : "Locked"}</li>
        ))}
      </ul>
      <a href="/blueimpact">Back to My Blue Impact</a>
  
    </div>
  );
}
