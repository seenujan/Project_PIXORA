import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { quizzes } from "../mockData/quizzes";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Quiz() {
  const { id } = useParams();
  const quiz = quizzes.find((q) => q.id == id);
  const [answers, setAnswers] = useState({});

  const handleChange = (qIdx, option) => {
    setAnswers({ ...answers, [qIdx]: option });
  };

  if (!quiz) {
    return (
      <div style={{ padding: "20px" }}>
        <Header />
        <p>Quiz not found.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          width: "100%",
          maxWidth: "700px"
        }}
      >
        <h1 style={{ textAlign: "center", color: "#2ec4b6", marginBottom: "20px" }}>
          {quiz.title}
        </h1>

        {quiz.questions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: "20px" }}>
            <p style={{ textAlign: "left", fontSize: "16px", color: "white", marginBottom: "10px" }}>
              {q.q}
            </p>
            <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.options.map((o) => (
                <label key={o} style={{ fontSize: "14px", color: "#9cff00" }}>
                  <input
                    type="radio"
                    name={`q${idx}`}
                    onChange={() => handleChange(idx, o)}
                    style={{ marginRight: "10px" }}
                  />
                  {o}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Submit Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to={`/quiz-result/${id}`} style={{ textDecoration: "none" }}>
            <Button text="Submit" />
          </Link>
        </div>
      </div>
    </div>
  );
}
