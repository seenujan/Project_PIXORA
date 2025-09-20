import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

export default function QuizResult() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>Quiz Result</h1>
      <p>You scored: 80% (mock)</p>
      <Link to={`/answer-review/${id}`}>Review Answers</Link>
      <br />
      <Link to="/home">Back to Home</Link>
      
    </div>
  );
}
