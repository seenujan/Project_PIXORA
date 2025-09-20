import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";


export default function Achievements() {
  const mockAchievements = ["Coral Protector Badge", "Turtle Saver Badge", "Ocean Quiz Master"];
  
  return (
    <div>
      <Header />
      <h1>Achievements</h1>
      <ul>
        {mockAchievements.map((a, idx) => <li key={idx}>{a}</li>)}
      </ul>
      <Link to="/blueimpact">Back to My Blue Impact</Link>
      
    </div>
  );
}
