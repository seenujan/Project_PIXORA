import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AnswerReview() {
  return (
    <div>
      <Header />
      <h1>Answer Review</h1>
      <p>Q1: Correct answer is 80%</p>
      <p>Q2: Correct answer is Turtle</p>
      <Link to="/home">Back to Home</Link>
      <Footer />
    </div>
  );
}
