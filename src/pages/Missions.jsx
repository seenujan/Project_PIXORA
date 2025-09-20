import React from "react";
import { missions } from "../mockData/missions";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Missions() {
  return (
    <div>
      <Header />
      <h1>Missions</h1>
      {missions.map((m) => (
        <div key={m.id}>
          <h3>{m.title}</h3>
          <p>{m.description}</p>
          <Link to={`/mission/${m.id}`}>Details</Link>
        </div>
      ))}
      
    </div>
  );
}
