import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate(); // navigation hook
  const [email, setEmail] = useState("jane@example.com");
  const [password, setPassword] = useState("password123");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login, then go to Home
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <Header />
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}
      >
        <div style={{ marginBottom: "5px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
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
        <div style={{ marginBottom: "5px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}
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
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Button text="Login" onClick={handleLogin} />
        </div>
      </form>

      <p style={{ marginTop: "20px" }}>Don&apos;t have an account?</p>
      <div style={{ marginTop: "10px" }}>
        {/* Sign Up as button instead of hyperlink */}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button text="Sign Up" />
        </Link>
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
