import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <h1>Welcome to OceanEcho Dashboard</h1>

      {/* Virtual Ocean Health */}
      <div style={boxStyle}>
        <h2>🌊 Virtual Ocean Health</h2>
        <p>Our oceans are the lifeblood of the planet, covering over 70% of Earth’s surface. Current ecosystem health: 75% (mock data).</p>
        <p>Learn how individual actions contribute to a cleaner, healthier ocean.</p>
      </div>

      {/* Daily Tip */}
      <div style={boxStyle}>
        <h2>💡 Today's Eco Tip</h2>
        <p>Using reusable water bottles and bags reduces plastic pollution dramatically.</p>
        <p>Small, consistent changes in daily habits can make a significant impact over time.</p>
      </div>

      {/* Educational Material */}
      <div style={boxStyle}>
        <h2>🌍 Did You Know?</h2>
        <p>Every year, 8 million tons of plastic enter the oceans, threatening marine life such as turtles, seabirds, and coral reefs.</p>
        <p>OceanEcho encourages learning, awareness, and responsible actions to help mitigate these issues.</p>
      </div>

      {/* Motivational Section */}
      <div style={boxStyle}>
        <h2>🚀 Take Action!</h2>
        <p>Engage with campaigns, complete quizzes, and track your personal impact. Every small step counts toward a healthier ocean ecosystem.</p>
        <p>Knowledge leads to action — stay informed, stay engaged, and make a difference!</p>
      </div>
    </div>
  );
}

// Styles
const boxStyle = {
  background: "#e0f7fa",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "20px",
  color: "#01579b",
  lineHeight: "1.6"
};
