import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

// Mock questions and correct answers for this quiz
const reviewQuestions = [
  { 
    q: "Percentage of ocean pollution from plastic?", 
    options: ["50%", "80%", "60%"], 
    answer: "80%" 
  },
  { 
    q: "Which animal is most affected by plastic?", 
    options: ["Turtle", "Whale", "Seagull"], 
    answer: "Turtle" 
  }
];

export default function AnswerReview() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Header outside the card */}
      <Header />

      {/* Glassy card container */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          margin: "20px auto"
        }}
      >
        <h1 style={{ color: "#2ec4b6", marginBottom: "20px" }}>Ocean Pollution Quiz Review</h1>

        {/* Questions & Correct Answers */}
        {reviewQuestions.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "16px", color: "white", marginBottom: "10px" }}>
              {idx + 1}. {item.q}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "5px" }}>
              {item.options.map((o) => (
                <p key={o} style={{ 
                  fontSize: "14px", 
                  color: o === item.answer ? "#9cff00" : "white",
                  fontWeight: o === item.answer ? "bold" : "normal"
                }}>
                  {o}
                </p>
              ))}
            </div>
            <p style={{ fontSize: "14px", color: "#9cff00", fontWeight: "bold" }}>
              Correct Answer: {item.answer}
            </p>
          </div>
        ))}

        {/* Back to Quiz Selection Button */}
        <div style={{ marginTop: "25px" }}>
          <Link to="/quiz-selection" style={{ textDecoration: "none" }}>
            <Button text="Back to Quiz Selection" />
          </Link>
        </div>
      </div>
    </div>
  );
}
