import React from "react";
import { quizzes } from "../mockData/quizzes";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function QuizSelection() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Select a Quiz</h1>

      {quizzes.map((q) => (
        <div
          key={q.id}
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
          <h3 style={{ fontSize: "20px", color: "#67eee0ff", marginBottom: "15px" }}>
            {q.title}
          </h3>

          {/* Start Quiz button centered */}
          <Link to={`/quiz/${q.id}`} style={{ textDecoration: "none" }}>
            <Button text="Start Quiz" />
          </Link>
        </div>
      ))}
    </div>
  );
}
