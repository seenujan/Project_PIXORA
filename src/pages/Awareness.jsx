import React from "react";
import { articles } from "../mockData/articles";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Awareness() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Awareness & Education</h1>

      {articles.map((a) => (
        <div
          key={a.id}
          style={{
            background: "rgba(255, 255, 255, 0.08)", // glassy effect
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "15px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontSize: "20px", color: "#6fe3d8ff", marginBottom: "10px" }}>
            {a.title} ({a.year})
          </h3>
          <p style={{ fontSize: "14px", color: "#9cff00", marginBottom: "20px" }}>
            {a.content}
          </p>

          {/* Take Quiz button centered */}
          <Link to="/quiz-selection" style={{ textDecoration: "none" }}>
            <Button text="Take Quiz" />
          </Link>
        </div>
      ))}
    </div>
  );
}
