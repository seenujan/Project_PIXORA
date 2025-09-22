import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Profile() {
  const mockUser = {
    name: "Pixora",
    email: "pixora@gmail.com",
    profilePic: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=crop&w=200&h=200&q=80", // Sample profile image
    points: 150,
    nextBadgePoints: 50,
    badges: ["Coral Protector", "Turtle Saver", "Ocean Quiz Master"],
    campaigns: ["Beach Cleanup", "Coral Planting"],
    recentActivity: [
      "Completed Ocean Pollution Quiz",
      "Joined Coral Planting Campaign",
      "Earned 50 points from Beach Cleanup"
    ]
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      {/* Hero Section */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          maxWidth: "700px",
          margin: "20px auto"
        }}
      >
        <img
          src={mockUser.profilePic}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "3px solid #2ec4b6",
            marginBottom: "15px"
          }}
        />
        <h2 style={{ color: "#2ec4b6", marginBottom: "5px" }}>{mockUser.name}</h2>
        <p style={{ color: "white", marginBottom: "15px" }}>{mockUser.email}</p>

        {/* Stats Cards */}
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
          <div style={{ flex: "1 1 150px", background: "rgba(255,255,255,0.08)", padding: "15px", borderRadius: "15px", color: "#9cff00" }}>
            <h3>Total Points</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{mockUser.points}</p>
          </div>
          <div style={{ flex: "1 1 150px", background: "rgba(255,255,255,0.08)", padding: "15px", borderRadius: "15px", color: "#67eee0ff" }}>
            <h3>Badges Earned</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{mockUser.badges.length}</p>
          </div>
          <div style={{ flex: "1 1 150px", background: "rgba(255,255,255,0.08)", padding: "15px", borderRadius: "15px", color: "white" }}>
            <h3>Campaigns</h3>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>{mockUser.campaigns.length}</p>
          </div>
        </div>

        {/* Progress Bar for Next Badge */}
        <div style={{ marginTop: "20px", color: "white" }}>
          <p>Next Badge: {mockUser.nextBadgePoints} points away</p>
          <div style={{ background: "rgba(255,255,255,0.1)", height: "15px", borderRadius: "10px", overflow: "hidden" }}>
            <div style={{ width: `${(mockUser.points/(mockUser.points + mockUser.nextBadgePoints))*100}%`, background: "#2ec4b6", height: "15px" }}></div>
          </div>
        </div>

        {/* Badge Preview */}
        <div style={{ marginTop: "25px" }}>
          <h3 style={{ color: "#67eee0ff", marginBottom: "10px" }}>Latest Badges</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {mockUser.badges.slice(0, 2).map((b, idx) => (
              <div key={idx} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "15px", padding: "10px 15px", color: "#9cff00" }}>
                🏅 {b}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "15px" }}>
            <Link to="/achievements" style={{ textDecoration: "none" }}>
              <Button text="View All Achievements" />
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ marginTop: "25px" }}>
          <h3 style={{ color: "#67eee0ff", marginBottom: "10px" }}>Recent Activity</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {mockUser.recentActivity.map((act, idx) => (
              <li key={idx} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "10px", marginBottom: "10px", color: "black" }}>
                🌊 {act}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <Link to="/goal-setting" style={{ textDecoration: "none", marginRight: "10px" }}>
            <Button text="Set Goals" />
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button text="Back to Home" />
          </Link>
        </div>
      </div>
    </div>
  );
}
