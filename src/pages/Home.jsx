import React from "react";
import { missions } from "../mockData/missions";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Dashboard</h1>
      <p>Virtual Ocean Health: 🌊 75%</p>
      <h2>Today's Tip</h2>
      <p>Use reusable water bottles to reduce plastic waste!</p>
      <h2>Missions</h2>
      {missions.map((m) => (
        <div key={m.id}>
          <h3>{m.title}</h3>
          <p>{m.description}</p>
          <p>Points: {m.points}</p>
          <Link to={`/mission/${m.id}`}>View Mission</Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}
