import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function AnswerReview() {
  return (
    <div>
      <Header />
      <h1>Answer Review</h1>
      <p>Q1: Correct answer is 80%</p>
      <p>Q2: Correct answer is Turtle</p>

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "20px" }}>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <Button text="Back to Home" />
        </Link>
      </div>
    </div>
  );
}
