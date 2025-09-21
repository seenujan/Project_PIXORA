import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Signup() {
  const navigate = useNavigate(); // navigation hook
  const [name, setName] = useState("Pixora");
  const [email, setEmail] = useState("Pixora@example.com");
  const [password, setPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password123");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock signup, then go to Home
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Header />
      <h1>Sign Up</h1>
      <form
        onSubmit={handleSignup}
        style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button text="Sign Up" onClick={handleSignup} />
        </div>
      </form>

      <p style={{ marginTop: "20px" }}>Already have an account?</p>
      <div style={{ marginTop: "10px" }}>
        <Link
          to="/login"
          style={{ color: "#074d86ff", textDecoration: "underline" }}
        >
          Login
        </Link>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #cbdce5ff",
  fontSize: "16px",
};
