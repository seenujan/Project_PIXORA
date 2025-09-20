import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar"; 
import { Link } from "react-router-dom";

export default function BlueImpact() {
  return (
    <div>
      <Header />
      <h1>My Blue Impact</h1>
      <p>Total Points: 150 (mock)</p>
      <ProgressBar percent={75} />
      <p>Virtual Ocean Health</p>
      <Link to="/impact-timeline">View Timeline</Link>
      <br />
      <Link to="/achievements">View Achievements</Link>
      <br />
      <Link to="/home">Back to Home</Link>
      <Footer />
    </div>
  );
}
