import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#0288d1",          // solid blue
      color: "white",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #026aa7", // subtle border for separation
      marginTop: "30px",              // spacing above footer
      fontSize: "14px"
    }}>
      <p>Contact: ocean-echo@example.com | +94 77 123 4567</p>
      <p>"Protecting the ocean, one action at a time!"</p>
      <p>&copy; 2025 OceanEcho</p>
    </footer>
  );
}
