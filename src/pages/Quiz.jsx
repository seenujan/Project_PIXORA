import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { quizzes } from "../mockData/quizzes";
import Header from "../components/Header";

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
              <input type="radio" name={`q${idx}`} onChange={() => handleChange(idx, o)} /> {o}
            </label>
          ))}
        </div>
      ))}
      <Link to={`/quiz-result/${id}`}>Submit</Link>
      
    </div>
  );
}
