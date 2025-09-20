import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <Header />
      <h1>My Profile</h1>
      <p>Name: Jane Doe (mock)</p>
      <p>Email: jane@example.com</p>
      <Link to="/goal-setting">Set Goals</Link>
      <br />
      <Link to="/home">Back to Home</Link>
      <Footer />
    </div>
  );
}
