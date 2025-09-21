import React from "react";

export default function Footer() {
  // Keep footer height consistent
  const footerHeight = "80px"; // adjust if needed

  return (
    <>
      {/* Main content wrapper */}
      <div style={{ paddingBottom: footerHeight }}>
        
      </div>

      {/* Footer */}
       <footer
        style={{
          width: "100%",
          backgroundColor: "#035079ff",
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          borderTop: "1px solid #026aa7",
          margin: 0,
          boxSizing: "border-box",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 0,
        }}
      >
        <p>Contact: ocean-echo@example.com | +94 77 123 4567</p>
        <p>"Protecting the ocean, one action at a time!"</p>
        <p>&copy; 2025 OceanEcho</p>
      </footer>
    </>
  );
}
