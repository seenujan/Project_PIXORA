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

  return (
    <div>
      <Header />
      <h1>{quiz.title}</h1>
      {quiz.questions.map((q, idx) => (
        <div key={idx}>
          <p>{q.q}</p>
          {q.options.map((o) => (
            <label key={o}>
              <input
                type="radio"
                name={`q${idx}`}
                onChange={() => handleChange(idx, o)}
              />{" "}
              {o}
            </label>
          ))}
        </div>
      ))}

      {/* Submit link changed to Button */}
      <div style={{ marginTop: "20px" }}>
        <Link to={`/quiz-result/${id}`} style={{ textDecoration: "none" }}>
          <Button text="Submit" />
        </Link>
      </div>
    </div>
  );
}
