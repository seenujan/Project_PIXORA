import React from "react";
import { useParams, Link } from "react-router-dom";
import { missions } from "../mockData/missions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function MissionDetail() {
  const { id } = useParams();
  const mission = missions.find((m) => m.id == id);

  return (
    <div>
      <Header />
      <h1>{mission.title}</h1>
      <p>{mission.description}</p>
      <p>Points: {mission.points}</p>
      <Button text="Mark Complete" onClick={() => alert("Mission Completed! (Mock)")} />
      <br />
      <Link to="/home">Back to Home</Link>
      <Footer />
    </div>
  );
}
