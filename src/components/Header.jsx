import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: 10, background: "#0288d1", color: "white" }}>
      <h1>OceanEcho</h1>
      <nav>
        <Link to="/home" style={{ color: "white", margin: 5 }}>Home</Link>
        <Link to="/awareness" style={{ color: "white", margin: 5 }}>Awareness</Link>
        <Link to="/missions" style={{ color: "white", margin: 5 }}>Missions</Link>
        <Link to="/volunteering" style={{ color: "white", margin: 5 }}>Volunteering</Link>
      </nav>
    </header>
  );
}
