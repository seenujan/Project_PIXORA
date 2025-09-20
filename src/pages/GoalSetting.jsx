import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function GoalSetting() {
  const [goal, setGoal] = useState("");
  return (
    <div>
      <Header />
      <h1>Set Personal Goal</h1>
      <input
        placeholder="Enter your ocean conservation goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={inputStyle}
      />
      <br />
      <Button text="Save Goal" onClick={() => alert(`Goal saved: ${goal} (mock)`)} />
      <br />

      {/* Back button instead of hyperlink */}
      <div style={{ marginTop: "20px" }}>
        <a href="/profile" style={{ textDecoration: "none" }}>
          <Button text="Back to Profile" />
        </a>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #0288d1",
  fontSize: "16px",
};
