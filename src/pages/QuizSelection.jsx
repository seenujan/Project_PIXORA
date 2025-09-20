import React from "react";
import { quizzes } from "../mockData/quizzes";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function QuizSelection() {
  return (
    <div>
      <Header />
      <h1>Select a Quiz</h1>
      {quizzes.map((q) => (
        <div key={q.id}>
          <h3>{q.title}</h3>
          <Link to={`/quiz/${q.id}`}>Start Quiz</Link>
        </div>
      ))}
      <Footer />
    </div>
  );
}
