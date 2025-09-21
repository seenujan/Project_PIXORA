import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function QuizResult() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      {/* Header outside the card */}
      <Header />

      {/* Glassy card for quiz result */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",   // glassy effect
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          margin: "20px auto"   // center the card with vertical spacing
        }}
      >
        <h1 style={{ color: "#2ec4b6", marginBottom: "15px" }}>Quiz Result</h1>
        <p style={{ fontSize: "16px", color: "#9cff00", marginBottom: "25px" }}>
          You scored: 80%
        </p>

        {/* Review Answers Button */}
        <div style={{ marginBottom: "15px" }}>
          <Link to={`/answer-review/${id}`} style={{ textDecoration: "none" }}>
            <Button text="Review Answers" />
          </Link>
        </div>

        {/* Back to Quiz Selection Button */}
        <div>
          <Link to="/quiz-selection" style={{ textDecoration: "none" }}>
            <Button text="Back Quiz Selection" />
          </Link>
        </div>
      </div>
    </div>
  );
}
