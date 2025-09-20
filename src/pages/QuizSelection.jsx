import React from "react";
import { quizzes } from "../mockData/quizzes";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function QuizSelection() {
  return (
    <div>
      <Header />
      <h1>Select a Quiz</h1>
      {quizzes.map((q) => (
        <div key={q.id}>
          <h3>{q.title}</h3>

          {/* Start Quiz link changed to Button */}
          <div style={{ marginTop: "10px" }}>
            <Link to={`/quiz/${q.id}`} style={{ textDecoration: "none" }}>
              <Button text="Start Quiz" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
