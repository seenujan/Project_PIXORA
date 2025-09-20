import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function GoalSetting() {
  const [goal, setGoal] = useState("");
  return (
    <div>
      <Header />
      <h1>Set Personal Goal</h1>
      <input placeholder="Enter your ocean conservation goal" value={goal} onChange={e => setGoal(e.target.value)} />
      <br />
      <Button text="Save Goal" onClick={() => alert(`Goal saved: ${goal} (mock)`)} />
      <br />
      <a href="/profile">Back to Profile</a>
    </div>
  );
}
