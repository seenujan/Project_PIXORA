import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function QuizResult() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>Quiz Result</h1>
      <p>You scored: 80% (mock)</p>

      {/* Review Answers link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to={`/answer-review/${id}`} style={{ textDecoration: "none" }}>
          <Button text="Review Answers" />
        </Link>
      </div>

      {/* Back to Home link changed to Button */}
      <div style={{ marginTop: "10px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
