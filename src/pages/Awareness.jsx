import React from "react";
import { articles } from "../mockData/articles";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Awareness() {
  return (
    <div>
      <Header />
      <h1>Awareness & Education</h1>
      {articles.map((a) => (
        <Card key={a.id} title={`${a.title} (${a.year})`} content={a.content}>
          {/* Replaced hyperlink with Button */}
          <Link to="/quiz-selection" style={{ textDecoration: "none" }}>
            <Button text="Take Quiz" />
          </Link>
        </Card>
      ))}
    </div>
  );
}
