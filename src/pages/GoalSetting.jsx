import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { toast } from "react-toastify"; // ✅ Import toast

export default function GoalSetting() {
  const [goal, setGoal] = useState("");

  const handleSaveGoal = () => {
    if (goal.trim() === "") {
      toast.error("⚠️ Please enter a goal before saving!");
    } else {
      toast.success(`🎯 Goal saved successfully! "${goal}"`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Glassy Card Container */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          maxWidth: "500px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#2ec4b6", marginBottom: "20px" }}>
          Set Personal Goal
        </h1>

        <input
          placeholder="Enter your ocean conservation goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.73)",
            background: "rgba(255, 255, 255, 0.5)",
            color: "black",
            fontSize: "16px",
            marginBottom: "20px",
            backdropFilter: "blur(12px)",
          }}
        />

        {/* Save Goal Button */}
        <Button text="Save Goal" onClick={handleSaveGoal} />

        {/* Back to Profile */}
        <div style={{ marginTop: "20px" }}>
          <a href="/profile" style={{ textDecoration: "none" }}>
            <Button text="Back to Profile" />
          </a>
        </div>
      </div>
    </div>
  );
}
