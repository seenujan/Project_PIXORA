import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ padding: 10, background: "#0288d1", color: "white", position: "fixed", bottom: 0, width: "100%" }}>
      <Link to="/home" style={{ color: "white", margin: 5 }}>Home</Link>
      <Link to="/blueimpact" style={{ color: "white", margin: 5 }}>My Impact</Link>
      <Link to="/profile" style={{ color: "white", margin: 5 }}>Profile</Link>
    </footer>
  );
}
